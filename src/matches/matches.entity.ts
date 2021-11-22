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

    @Field(type => User)
    @ManyToOne()
    teamA_rightPlayer: User;

    @Field(type => User)
    @ManyToOne()
    teamB_leftPlayer: User;

    @Field(type => User)
    @ManyToOne()
    teamB_rightPlayer: User;

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(
        date: Date, place: string, teamA_leftPlayer: User, teamA_rightPlayer: User,
        teamB_leftPlayer: User, teamB_rightPlayer: User
    ) {
        this.date = date;
        this.place = place;
        this.teamA_leftPlayer = teamA_leftPlayer;
        this.teamA_rightPlayer = teamA_rightPlayer;
        this.teamB_leftPlayer = teamB_leftPlayer;
        this.teamB_rightPlayer = teamB_rightPlayer;
    }
    
    toJSON(match?: Match) {
        const o = wrap(this).toObject();
        return o;
    }

}
