import { Body, Controller, Get, Post, Req, } from '@nestjs/common';
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

//protected route for jwt authentication
@Get("dashboard")
Dashboard(@Req() req:any){

    const token=req.headers.authorization?.split(" ")[1]

   const decoded= this.userService.VerifyJwt(token)

    if(decoded?.user!=null)
    {
      return this.userService.Dashboard()
    }

}




}
