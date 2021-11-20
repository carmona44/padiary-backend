import { Entity, EntityRepositoryType, ManyToOne, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { MatchRepository } from './matches.repository';
import { User } from 'src/users/users.entity';

@ObjectType()
@Entity({ tableName: 'matches' })
export class Match {

    [EntityRepositoryType]?: MatchRepository;

    @Field(type => ID)
    @PrimaryKey()
    _id: ObjectId;

    @Field(type => Date)
    @Property()
    date: Date;

    @Field(type => String)
    @Property()
    place: string;

    @Field(type => User)
    @ManyToOne()
    teamA_leftPlayer: User;

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(date: Date, place: string, teamA_leftPlayer: User) {
        this.date = date;
        this.place = place;
        this.teamA_leftPlayer = teamA_leftPlayer;
    }
    
    toJSON(match?: Match) {
        const o = wrap(this).toObject();
        return o;
    }

}
