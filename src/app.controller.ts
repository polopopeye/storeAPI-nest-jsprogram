import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'KLK mi pana 2';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/filter')
  getProductFilter() {
    return 'yo soy un filter';
  }

  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return 'product de ' + id;
  }

  @Get('categories/:categoryId/products/:id')
  getCategory(
    @Param('id') id: number,
    @Param('categoryId') categoryId: number,
  ) {
    return 'product de ' + id + ' y categoryId: ' + categoryId;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 1,
    @Query('offset') offset = 2,
    @Query('brand') brand = '3',
  ) {
    return `Lista de todos los productos
    estaria bien que por defecto tengan un limit y offset, 

    ${limit} => limit
    ${offset} => offset
    ${brand} => brand

    
    `;
  }
}
