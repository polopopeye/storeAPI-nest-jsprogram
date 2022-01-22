import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return 'yo soy un filter';
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return 'product de ' + id;
  }
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 1,
    @Query('offset') offset = 2,
    @Query('brand') brand = '3',
  ) {
    return {
      message: `Lista de todos los productos
        estaria bien que por defecto tengan un limit y offset, 
        ${limit} => limit
        ${offset} => offset
        ${brand} => brand
        `,
    };
  }

  @Post()
  create(@Body() payload: string) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  edit(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'accion de editar',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'accion de eliminar',
      id,
    };
  }
}
