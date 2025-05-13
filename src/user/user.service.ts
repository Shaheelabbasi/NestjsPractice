import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,
        private jwtService:JwtService
    ){}

   async SignUp(userdto:CreateUserDto):Promise<User>{
   
    const IsexistingUser=await this.userRepository.findOne({where:{email:userdto.email}})
    
    if(IsexistingUser)
        throw new BadRequestException("user already exists") 
        const user=this.userRepository.create(userdto)

        return await this.userRepository.save(user)
       // we will write the signup logic here
    }
    async Login(logindto:LoginDto){

        const {email,password}=logindto
        console.log("emial is ",email)
        console.log("password is ",password)

        const IsExisting=await this.userRepository.findOne({where:{email:email}})
       
        if (!IsExisting) {
            throw new BadRequestException("user does not exist")
        }
        
        if(IsExisting.password!=password)
        {
        
            throw new BadRequestException("Incorrect password")
        }

        const token=this.jwtService.sign({id:IsExisting.id,email:IsExisting.email})

        return {
            message:"login successfull",
            token
        }

    }

    VerifyJwt(token:string){

        try {
            const decoded=this.jwtService.verify(token)
            return {user:decoded}
        } catch (error) {
            
            if(error.name=="TokenExpiredError")
            {
                throw new UnauthorizedException("token is expired")
            }
        }
        

       
    }

    Dashboard(){
        return {
            message:"private route accesssed"
        }
    }
}
