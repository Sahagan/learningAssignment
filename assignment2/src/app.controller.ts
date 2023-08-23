import { Controller, Get,Res, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/weather/:postCode')
  async getWeather(@Res()res,@Param()param){
    let result = await this.getHello(param.postCode);
    res.status(200);
    res.json(result);
  };
  getHello(postCode): any {
    return this.appService.getHello(postCode);
  };
}
