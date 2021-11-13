import { Injectable } from '@nestjs/common';
import { ObjectId } from 'bson';
import { Users } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async findAll(): Promise<Users[]> { 
        return this.userRepository.findAll();  
    }

    async findOneById(_id: ObjectId): Promise<Users> { 
        const user = await this.userRepository.findOne(_id);
        return user;
    }
}
