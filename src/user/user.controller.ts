import { Body, Controller, Get, Post, } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
    //same as 
    //private readonly userService:UserService
    //constructor(userService:UserService){
    //this.userService=UserService
    //}
    constructor(private readonly userService:UserService){
        
    }

   
@Post("signup")

Signup(@Body() userdto:CreateUserDto):any{

    return this.userService.SignUp(userdto)

}

@Post("login")

Login (@Body() logindto:LoginDto){

    return this.userService.Login(logindto)
}




}
