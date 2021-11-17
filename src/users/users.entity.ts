import { Entity, EntityRepositoryType, Enum, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { Country, PlayerLevel, PlayerPosition, PlayerPredominantHand, Shot } from './constants';
import { NewUserInput } from './dto/new-user.dto';
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

    @Field(type => Int)
    @Property()
    age: number;

    @Field(type => PlayerPosition)
    @Enum(() => PlayerPosition)
    position: PlayerPosition;

    @Field(type => PlayerLevel)
    @Enum(() => PlayerLevel)
    level: PlayerLevel;

    @Field(type => PlayerPredominantHand)
    @Enum(() => PlayerPredominantHand)
    predominantHand: PlayerPredominantHand;

    @Field()
    @Property()
    picture: string;

    @Field(type => Country)
    @Enum(() => Country)
    country: Country;

    @Field()
    @Property()
    region: string;

    @Field(type => Shot)
    @Enum(() => Shot)
    bestShot: Shot;

    constructor(newUserInput: NewUserInput) {
        this.name = newUserInput.name;
        this.age = newUserInput.age;
        this.surname = newUserInput.surname;
        this.position = newUserInput.position;
        this.level = newUserInput.level;
        this.predominantHand = newUserInput.predominantHand;
        this.picture = newUserInput.picture;
        this.country = newUserInput.country;
        this.region = newUserInput.region;
        this.bestShot = newUserInput.bestShot;
    }
    
    toJSON(user?: User) {
        const o = wrap(this).toObject();
        return o;
    }

}
