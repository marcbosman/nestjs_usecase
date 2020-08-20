import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getCats() {
    return this.catsService.getCats();
  }

  @Get(':id')
  getCat(@Param() params) {
    console.log('Getting a cat by id');
    return this.catsService.getCats().filter(p => p.id == params.id);
  }
}
