import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property,
  wrap,
} from '@mikro-orm/core';
import { ObjectId } from 'bson';
import { UserRepository } from './users.repository';

@Entity()
export class Users {

  [EntityRepositoryType]?: UserRepository;

  @PrimaryKey()
  _id: ObjectId;

  @Property()
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  toJSON(user?: Users) {
    const o = wrap(this).toObject();

    return o;
  }

}