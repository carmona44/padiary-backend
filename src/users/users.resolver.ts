import { NotFoundException } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

@Resolver(of => User)
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService,
  ){}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

}