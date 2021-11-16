import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

@Resolver(of => User)
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService,
  ){}

  @Query(() => [User])
  async getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}