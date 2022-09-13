import { Injectable } from '@nestjs/common'
import { User } from './users.model'
import { v4 as uuidv4 } from 'uuid'
import { Param } from '@nestjs/common';

@Injectable()
export class UserService {
    private users: User[] = [];

    insertUser(name: string, email: string, password: string) {
        const userId = uuidv4();
        const newUser = new User(userId, name, email, password);
        this.users.push(newUser);
        return userId;
    }
    getUsers() {
        return [...this.users];
    }
    getUser(@Param('id') userId: number) {
        return this.getUserById(userId)[0];
    }
    updateUser(
        userId: number,
        name: string,
        email: string,
        password: string) {
        const [targetUser, index] = this.getUserById(userId);
        const newUserParams = { ...targetUser, name, email, password };
        const newUser = new User(
            userId,
            newUserParams.name,
            newUserParams.email,
            newUserParams.password
        )
        this.users[index] = newUser;
        return newUser;

    }
    private getUserById(id: number): [User, number] {
        const index = this.users.findIndex(user => user.id === id);
        return [this.users[index], index];
    }
    deleteUser(userId: number) {
        const [_, index] = this.getUserById(userId);
        this.users.splice(index, 1);
        return {message:"User deleted successfully"};
    }
}