import { Body, Controller, Post, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentRequest, VerifyPaymentRequest } from './dto/models';
import { Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('request')
  async requestPayment(@Body() body: PaymentRequest, @Res() res: Response) {
    const payment = await this.paymentsService.requestPayment(body);
    return res.status(payment.isError ? 500 : 200).json(payment);
  }

  @Post('verify')
  async verifyPayment(
    @Body() body: VerifyPaymentRequest,
    @Res() res: Response,
  ) {
    const payment = await this.paymentsService.verifyPayment(body);
    return res.status(payment.isError ? 500 : 200).json(payment);
  }
}
