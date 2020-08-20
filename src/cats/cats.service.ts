import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  cats = [{
    id: 1,
    name: 'Tommy'
  },
  {
    id: 2,
    name: 'Sammy'
  }];

  getCats() {
    return this.cats;
  }
}
