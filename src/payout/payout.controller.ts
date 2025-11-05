import { Controller } from '@nestjs/common';
import { PayoutService } from './payout.service';

@Controller()
export class PayoutController {
  constructor(private readonly payoutService: PayoutService) {}
}
