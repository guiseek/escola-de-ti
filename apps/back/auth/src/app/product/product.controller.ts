import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.productService.findOne(name);
  }

  @Put(':name')
  update(
    @Param('name') name: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return this.productService.update(name, updateProductDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.productService.remove(name);
  }
}
