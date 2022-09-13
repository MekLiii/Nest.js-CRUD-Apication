import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { Module } from "@nestjs/common";

@Module({
    controllers: [UserController],
    providers: [UserService],

})
export class UserModule { 
     
}