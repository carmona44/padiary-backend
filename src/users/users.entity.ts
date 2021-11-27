import { Entity, EntityRepositoryType, Enum, OneToMany, PrimaryKey, Property, Unique, wrap } from '@mikro-orm/core';
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
    name: string;

    @Field()
    @Property()
    surname: string;

    @Field()
    @Property()
    @Unique()
    username: string;

    @Field()
    @Property()
    picture: string;

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    /*constructor(newUserInput: NewUserInput) {
        this.name = newUserInput.name;
        this.surname = newUserInput.surname;
        this.username = newUserInput.username;
        this.picture = newUserInput.picture;
        this.country = newUserInput.country;
    }*/
    
    toJSON(user?: User) {
        const o = wrap(this).toObject();
        return o;
    }

}
