import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { payment_types } from '@prisma/client';

import { HttpService } from '@nestjs/axios';
import {
  PaymentRequest,
  PaymentResponse,
  VerifyPaymentRequest,
} from './dto/models';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  // async getPaymentType(payment: payment_types) {
  //   return this.prisma.payment_method.findFirst({
  //     where: {
  //       method: payment,
  //     },
  //   });
  // }

  async requestPayment(req: PaymentRequest): Promise<PaymentResponse> {
    try {
      const authToken: string = this.configService.get<string>(
        'AUTHTOKEN',
      ) as string;

      const url = this.configService.get<string>('MONIUNIFYURL') as string;

      const body: PaymentRequest = {
        amount: req.amount,
        auth_id: authToken,
        from_payer: req.from_payer,
      };

      this.logger.log(
        `Initiating payment request to ${url} with body: ${JSON.stringify(body)}`,
      );

      const response: AxiosResponse<PaymentResponse> =
        await this.httpService.axiosRef.post(url, body, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

      return response.data; // ✅ returns the actual payment response
    } catch (error) {
      this.logger.error('Payment request failed', error?.message || error);

      return {
        message: 'Payment request failed',
        isError: true,
        data: error?.response?.data || null,
      } as PaymentResponse; // ✅ cast for consistent return shape
    }
  }

  async verifyPayment(req: VerifyPaymentRequest): Promise<PaymentResponse> {
    try {
      const authToken: string = this.configService.get<string>(
        'AUTHTOKEN',
      ) as string;

      const url = this.configService.get<string>(
        'MONIUNIFYVERIFYURL',
      ) as string;
      const body: VerifyPaymentRequest = {
        transaction_id: req.transaction_id,
        auth_id: authToken,
      };

      const response: AxiosResponse<PaymentResponse> =
        await this.httpService.axiosRef.post(url, body, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

      return response.data;
    } catch (error) {
      this.logger.error('Payment verification failed', error?.message || error);

      return {
        message: 'Payment verification failed',
        isError: true,
        data: error?.response?.data || null,
      } as PaymentResponse;
    }
  }
}
