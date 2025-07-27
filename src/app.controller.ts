import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService, // Assuming ConfigService is imported and used
  ) {}

  @Get() //route
  @Render("home")
  handleHomePage() {
    //port from .env
    console.log(">>>Check PORT = ",this.configService.get<string>('PORT'));
    const messsage =this.appService.getHello();
    // return this.appService.getHello();
    return{
      
    }
  }
}
