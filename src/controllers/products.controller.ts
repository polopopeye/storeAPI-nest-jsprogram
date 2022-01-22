import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  // ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productServices: ProductsService) {}

  @Get('filter')
  getProductFilter() {
    return 'yo soy un filter';
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // return 'product de ' + id;
    return this.productServices.findOne(id);
  }
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 1,
    @Query('offset') offset = 2,
    @Query('brand') brand = '3',
  ) {
    // return {
    //   message: `Lista de todos los productos
    //     estaria bien que por defecto tengan un limit y offset,
    //     ${limit} => limit
    //     ${offset} => offset
    //     ${brand} => brand
    //     `,
    // };
    return this.productServices.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productServices.create(payload);
  }

  @Put(':id')
  edit(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   message: 'accion de editar',
    //   id,
    //   payload,
    // };
    return this.productServices.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   message: 'accion de eliminar',
    //   id,
    // };
    return this.productServices.delete(id);
  }
}
