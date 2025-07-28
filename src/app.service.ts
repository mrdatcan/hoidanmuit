import { Injectable } from '@nestjs/common';
//Dùng để trình bày Cách tạo controller/service.


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
