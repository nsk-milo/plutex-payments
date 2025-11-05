import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateOrderType } from './dto/order-types';

@Injectable()
export class OrderService {
  // constructor(private prisma: PrismaService) {}
  //
  // async createOrder(req: CreateOrderType) {
  //   // Step 1: Preload all products’ prices
  //   const productIds = req.products.map((p) => p.product_id);
  //
  //   const products = await this.prisma.product.findMany({
  //     where: { product_id: { in: productIds } },
  //     select: { product_id: true, price: true },
  //   });
  //
  //   // Step 2: Build order items with resolved prices
  //   const orderItemsData = req.products.map((item) => {
  //     const product = products.find((p) => p.product_id === item.product_id);
  //
  //     if (!product) {
  //       throw new Error(`Product with ID ${item.product_id} not found`);
  //     }
  //
  //     return {
  //       product: { connect: { product_id: item.product_id } },
  //       quantity: item.quantity,
  //       price: product.price,
  //     };
  //   });
  //
  //   // Step 3: Create order
  //   const order = await this.prisma.order.create({
  //     data: {
  //       buyer_id: req.user_id,
  //       status: 'pending',
  //       order_items: {
  //         create: orderItemsData,
  //       },
  //     },
  //     include: {
  //       order_items: {
  //         include: { product: true },
  //       },
  //     },
  //   });
  //
  //   return order;
  // }
}
