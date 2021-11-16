import { Injectable } from '@nestjs/common';
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
        return await this.userRepository.findOne(id);
    }
}
