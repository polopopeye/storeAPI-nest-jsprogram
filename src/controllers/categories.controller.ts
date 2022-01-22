import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:id')
  getCategory(
    @Param('id') id: number,
    @Param('categoryId') categoryId: number,
  ) {
    return 'product de ' + id + ' y categoryId: ' + categoryId;
  }
}
