import { PaymentsService } from './payments.service';
import { PaymentRequest, VerifyPaymentRequest } from './dto/models';
import { Response } from 'express';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    requestPayment(body: PaymentRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    verifyPayment(body: VerifyPaymentRequest, res: Response): Promise<Response<any, Record<string, any>>>;
}
