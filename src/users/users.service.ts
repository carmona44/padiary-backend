import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async findAll(populate?: any[]): Promise<User[]> { 
        return this.userRepository.findAll(populate);
    }

    async findOneById(id: string, populate?: any[]): Promise<User> { 
        return this.userRepository.findOne(id, populate);
    }

    /*async create(newUserInput: NewUserInput): Promise<User> {   
        const newUser = new User(newUserInput);
        await this.userRepository.persistAndFlush(newUser);
        return newUser;
    }*/

}
