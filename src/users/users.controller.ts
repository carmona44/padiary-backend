import { Controller, Get, Param } from '@nestjs/common';
import { ObjectId } from 'bson';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UsersService
    ) {}

    @Get()
    async findAll(): Promise<Users[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOneById(@Param('id') id: ObjectId): Promise<any> {
        return this.userService.findOneById(id);
    }
}
