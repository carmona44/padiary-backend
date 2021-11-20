import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user-input.dto';
import { User } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async findAll(): Promise<User[]> { 
        return this.userRepository.findAll();
    }

    async findOneById(id: string, populate?: any[]): Promise<User> { 
        return this.userRepository.findOne(id, populate);
    }

    async create(newUserInput: NewUserInput): Promise<User> {   
        const newUser = new User(newUserInput);
        await this.userRepository.persistAndFlush(newUser);
        return newUser;
    }

}
