import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductModule } from 'src/product/product.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [ProductModule, PrismaModule],
})
export class OrderModule {}
