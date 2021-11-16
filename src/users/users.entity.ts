import { Entity, EntityRepositoryType, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { UserRepository } from './users.repository';

@ObjectType()
@Entity({tableName: 'users'})
export class User {

    [EntityRepositoryType]?: UserRepository;

    @Field(type => ID)
    @PrimaryKey()
    _id: ObjectId;

    @Field()
    @Property()
    username: string;

    constructor(username: string) {
        this.username = username;
    }
    
    /*toJSON(user?: User) {
        const o = wrap(this).toObject();

        return o;
    }*/

}
