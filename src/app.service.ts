import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  addHello(abc:any):object{

    const {name,age}=abc
    console.log("name is ",name)
    console.log("age is ",age)
    console.log("the sent data is ",abc)
    return {
      name:name,
      age:age
    }
  }

  
}
