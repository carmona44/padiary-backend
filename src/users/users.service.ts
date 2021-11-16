import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.dto';
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

    async findOneById(id: string): Promise<User> { 
        return this.userRepository.findOne(id);
    }

    async create(newUserInput: NewUserInput): Promise<User> {   
        const { username } = newUserInput;
        const newUser = new User(username);
        await this.userRepository.persistAndFlush(newUser);
        return newUser;
    }

}
