
import { IsEmail, IsNotEmpty } from 'class-validator';



export class CreateUserDto{
    @IsEmail()
    email:string

    @IsNotEmpty()
    fullname:string

}
