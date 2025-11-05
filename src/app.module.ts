import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { ReviewModule } from './review/review.module';
import { PayoutModule } from './payout/payout.module';
import { PaymentsModule } from './payments/payments.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    RoleModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    OrderItemModule,
    ReviewModule,
    PayoutModule,
    PaymentsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
