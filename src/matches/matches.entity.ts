import { Entity, EntityRepositoryType, ManyToOne, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { MatchRepository } from './matches.repository';
import { Player } from 'src/players/players.entity';

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

    @Field(type => Player)
    @ManyToOne()
    teamA_leftPlayer: Player;

    @Field(type => Player)
    @ManyToOne()
    teamA_rightPlayer: Player;

    @Field(type => Player)
    @ManyToOne()
    teamB_leftPlayer: Player;

    @Field(type => Player)
    @ManyToOne()
    teamB_rightPlayer: Player;

    @Field(type => String)
    @Property()
    comments: string;

    @Field(type => Number)
    @Property()
    effort: number;

    @Field(type => Player)
    @ManyToOne()
    mvp: Player;

    @Field(type => Number)
    @Property()
    duration: number;

    @Field(type => [Number])
    @Property()
    teamA_result: number[];

    @Field(type => [Number])
    @Property()
    teamB_result: number[];

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(
        date: Date, place: string, teamA_leftPlayer: Player, teamA_rightPlayer: Player,
        teamB_leftPlayer: Player, teamB_rightPlayer: Player, comments: string, effort: number,
        mvp: Player, duration: number, teamA_result: number[], teamB_result: number[]
    ) {
        this.date = date;
        this.place = place;
        this.teamA_leftPlayer = teamA_leftPlayer;
        this.teamA_rightPlayer = teamA_rightPlayer;
        this.teamB_leftPlayer = teamB_leftPlayer;
        this.teamB_rightPlayer = teamB_rightPlayer;
        this.comments = comments;
        this.effort = effort;
        this.mvp = mvp;
        this.duration = duration;
        this.teamA_result = teamA_result;
        this.teamB_result = teamB_result;
    }
    
    toJSON(match?: Match) {
        const o = wrap(this).toObject();
        return o;
    }

}
