import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { PaymentRequest, PaymentResponse, VerifyPaymentRequest } from './dto/models';
import { ConfigService } from '@nestjs/config';
export declare class PaymentsService {
    private readonly prisma;
    private readonly httpService;
    private readonly configService;
    private readonly logger;
    constructor(prisma: PrismaService, httpService: HttpService, configService: ConfigService);
    requestPayment(req: PaymentRequest): Promise<PaymentResponse>;
    verifyPayment(req: VerifyPaymentRequest): Promise<PaymentResponse>;
}
