import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseDto } from 'src/utils/response.dto';
import { CreateProductType } from './dtos/models';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProductService {
  // constructor(
  //   private readonly prisma: PrismaService,
  //   private readonly user: UserService,
  // ) {}
  //
  // async getProducts() {
  //   const products = await this.prisma.role.findMany();
  //   return new ResponseDto(200, 'Products fetched successfully', products);
  // }
  //
  // async addNewProduct(req: CreateProductType, fileUrl: string) {
  //   const seller = await this.user.getUserById(parseInt(req.seller_id));
  //
  //   const category = await this.prisma.category.findUnique({
  //     where: { category_id: req.category_id },
  //   });
  //
  //   if (!category) {
  //     return new ResponseDto(422, 'Invalid category ID', null);
  //   }
  //
  //   if (!seller || seller.role.role_name !== 'seller') {
  //     return new ResponseDto(422, 'Invalid seller ID', null);
  //   }
  //   const product = await this.prisma.product.create({
  //     data: {
  //       name: req.name,
  //       description: req.description,
  //       price: req.price,
  //       user: { connect: { user_id: parseInt(req.seller_id) } },
  //       stock: req.stock,
  //       image_url: fileUrl,
  //       category: { connect: { category_id: req.category_id } },
  //     },
  //   });
  //
  //   if (product) {
  //     return new ResponseDto(201, 'Product created successfully', product);
  //   }
  //
  //   return new ResponseDto(422, 'Product creation failed', null);
  // }
  //
  // async updateProductStock(product_id: number, newStock: number) {
  //   // validate input
  //   if (!Number.isInteger(newStock)) {
  //     return new ResponseDto(422, 'Invalid stock delta', null);
  //   }
  //
  //   const existing = await this.prisma.product.findUnique({
  //     where: { product_id },
  //   });
  //
  //   if (!existing) {
  //     return new ResponseDto(404, 'Product not found', null);
  //   }
  //
  //   const newStockValue = existing.stock + newStock;
  //   if (newStockValue < 0) {
  //     return new ResponseDto(422, 'Resulting stock cannot be negative', null);
  //   }
  //
  //   const updatedProduct = await this.prisma.product.update({
  //     where: { product_id },
  //     data: { stock: newStockValue },
  //   });
  //
  //   if (updatedProduct) {
  //     return new ResponseDto(
  //       200,
  //       'Product stock updated successfully',
  //       updatedProduct,
  //     );
  //   }
  //
  //   return new ResponseDto(422, 'Failed to update product stock', null);
  // }
  //
  // async isProductAvailable(
  //   product_id: number,
  //   requiredQuantity: number,
  // ): Promise<boolean> {
  //   return this.prisma.product
  //     .findUnique({
  //       where: { product_id },
  //       select: { stock: true },
  //     })
  //     .then((product) => {
  //       if (!product) {
  //         return false; // Product does not exist
  //       }
  //       return product.stock >= requiredQuantity;
  //     });
  // }
  //
  // async decreseProductStock(
  //   product_id: number,
  //   quantity: number,
  // ): Promise<boolean> {
  //   const product = await this.prisma.product.findUnique({
  //     where: { product_id },
  //   });
  //
  //   if (!product || product.stock < quantity) {
  //     return false;
  //   }
  //
  //   await this.prisma.product.update({
  //     where: { product_id },
  //     data: { stock: product.stock - quantity },
  //   });
  //
  //   return true;
  // }
  //
  // async getProductById(product_id: number) {
  //   const product = await this.prisma.product.findUnique({
  //     where: { product_id },
  //     include: {
  //       category: true,
  //       user: {
  //         select: { name: true, email: true, phone: true },
  //       },
  //     },
  //   });
  //
  //   if (!product) {
  //     return new ResponseDto(404, 'Product not found', null);
  //   }
  //
  //   return new ResponseDto(200, 'Product fetched successfully', product);
  // }
}
