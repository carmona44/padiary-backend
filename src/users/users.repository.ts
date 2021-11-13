import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mongodb';
import { Users } from './users.entity';

@Repository(Users)
export class UserRepository extends EntityRepository<Users> {

}