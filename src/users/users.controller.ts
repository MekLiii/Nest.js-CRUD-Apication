import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) { }
    @Post()
    insertUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const userId = this.usersService.insertUser(name, email, password)
        return { id: userId, message: 'User created successfully' };
    }
    @Get()
    getAllUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(
        @Param('id') userId: number
    ) {
        return this.usersService.getUser(userId);
    }

    @Put(':id')
    updateUser(
        @Param('id') userId: number,
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.usersService.updateUser(userId, name, email, password);
    }

    @Delete(':id')
    deleteUser(
        @Param('id') userId: number
    ) {
        return this.usersService.deleteUser(userId);
     }

}


