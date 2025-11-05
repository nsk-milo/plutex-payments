import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [PrismaModule, UserModule],
  exports: [ProductService],
})
export class ProductModule {}
