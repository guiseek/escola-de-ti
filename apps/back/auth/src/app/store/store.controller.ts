import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get()
  findAll() {
    return this.storeService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.storeService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(name, updateStoreDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.storeService.remove(name);
  }
}
