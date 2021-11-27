import { Repository, EntityRepository } from '@mikro-orm/core';
import { User } from './users.entity';

@Repository(User)
export class UserRepository extends EntityRepository<User> {}