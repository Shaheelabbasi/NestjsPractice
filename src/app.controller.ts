import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/entity/user.entity';


@Controller("hello")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("users")
  getHello(): string {
    return this.appService.getHello();
  }
 
}
