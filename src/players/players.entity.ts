import { Collection, Entity, EntityRepositoryType, Enum, OneToMany, PrimaryKey, Property, Unique, wrap } from '@mikro-orm/core';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { Country, PlayerLevel, PlayerPosition, PlayerPredominantHand, Shot } from './enums';
import { NewPlayerInput } from './dto/new-player-input.dto';
import { PlayerRepository } from './players.repository';
import { Match } from 'src/matches/matches.entity';

@ObjectType()
@Entity({tableName: 'players'})
export class Player {

    [EntityRepositoryType]?: PlayerRepository;

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

    @Field(() => [Match])
    @OneToMany({entity: () => Match, mappedBy: 'teamA_leftPlayer'})
    matchesTeamALeft = new Collection<Match>(this);

    @Field(() => [Match])
    @OneToMany({entity: () => Match, mappedBy: 'teamA_rightPlayer'})
    matchesTeamARight = new Collection<Match>(this);

    @Field(() => [Match])
    @OneToMany({entity: () => Match, mappedBy: 'teamB_leftPlayer'})
    matchesTeamBLeft = new Collection<Match>(this);

    @Field(() => [Match])
    @OneToMany({entity: () => Match, mappedBy: 'teamB_rightPlayer'})
    matchesTeamBRight = new Collection<Match>(this);

    @Field(() => [Match])
    @OneToMany({entity: () => Match, mappedBy: 'mvp'})
    mvp = new Collection<Match>(this);

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(newPlayerInput: NewPlayerInput) {
        this.name = newPlayerInput.name;
        this.age = newPlayerInput.age;
        this.surname = newPlayerInput.surname;
        this.username = newPlayerInput.username;
        this.position = newPlayerInput.position;
        this.level = newPlayerInput.level;
        this.predominantHand = newPlayerInput.predominantHand;
        this.picture = newPlayerInput.picture;
        this.country = newPlayerInput.country;
        this.region = newPlayerInput.region;
        this.bestShot = newPlayerInput.bestShot;
    }
    
    toJSON(player?: Player) {
        const o = wrap(this).toObject();
        return o;
    }

}
