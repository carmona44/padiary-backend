import { Controller, Get, Param } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UsersService
    ) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOneById(@Param('id') id: string): Promise<any> {
        return this.userService.findOneById(id);
    }
}
