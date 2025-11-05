import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestDto } from './dto/request.dto';
import { ResponseDto } from 'src/utils/response.dto';

@Injectable()
export class CategoryService {
  // constructor(private readonly prisma: PrismaService) {}
  //
  // async createCategory(req: RequestDto) {
  //   const category = await this.prisma.category.create({
  //     data: {
  //       name: req.name,
  //       description: req.description,
  //     },
  //   });
  //
  //   if (category) {
  //     return new ResponseDto(201, 'category has been created successfully', {
  //       name: category.name,
  //       description: category.description,
  //     });
  //   }
  //
  //   return new ResponseDto(422, 'Failed to create category', null);
  // }
  //
  // async getCategories() {
  //   const categories = await this.prisma.category.findMany();
  //   return new ResponseDto(200, 'Categories fetched successfully', categories);
  // }
  //
  // async getCategoryById(id: number) {
  //   const category = await this.prisma.category.findUnique({
  //     where: { category_id: id },
  //   });
  //
  //   if (category) {
  //     return new ResponseDto(200, 'Category fetched successfully', category);
  //   }
  //
  //   return new ResponseDto(404, 'Category not found', null);
  // }
}
