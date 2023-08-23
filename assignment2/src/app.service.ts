import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService){}
  async getHello(postCode): Promise<any> {
    console.log('query : ',postCode);
    let result:any = await this.httpService.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${postCode},TH&appid=65c30b3194d7c141789fc9f4789c59e2`);
    return await this.httpService.get(`https://api.openweathermap.org/data/2.5/weather?lat=${result.lat}&lon=${result.lon}&appid=65c30b3194d7c141789fc9f4789c59e2`);
  }
}
