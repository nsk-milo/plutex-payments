import { Body, Controller, Post, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { RequestDto } from './dto/request.dto';
import { Response } from 'express';

@Controller()
export class CategoryController {
  // constructor(private readonly categoryService: CategoryService) {}
  //
  // @Post('create')
  // async createCategory(@Body() req: RequestDto, @Res() res: Response) {
  //   const response = await this.categoryService.createCategory(req);
  //   res.status(response.status).json(response);
  // }
}
