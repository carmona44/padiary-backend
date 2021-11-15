import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class UsersResolver {

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}