import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductType } from './dtos/models';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';

@Controller('Products')
export class ProductController {
  // constructor(private readonly productService: ProductService) {}
  //
  // @Post('create')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads/products',
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         callback(null, `product-${uniqueSuffix}${ext}`);
  //       },
  //     }),
  //   }),
  // )
  // async createProduct(
  //   @Body() req: CreateProductType,
  //   @UploadedFile() file: Express.Multer.File,
  //   @Res() res: Response,
  // ) {
  //   const baseUrl = `${process.env.BASE_URL || 'http://localhost:3000'}`;
  //   const imageUrl = file ? `${baseUrl}/uploads/products/${file.filename}` : '';
  //
  //   const product = await this.productService.addNewProduct(req, imageUrl);
  //   res.status(product.status).json(product);
  // }
  //
  // @Get('all')
  // async getProducts() {
  //   return this.productService.getProducts();
  // }
  //
  // @Get(':id')
  // async getProductById(@Res() res: Response) {
  //   const products = await this.productService.getProducts();
  //   res.status(products.status).json(products);
  // }
}
