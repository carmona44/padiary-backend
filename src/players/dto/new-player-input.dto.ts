import { Field, InputType } from '@nestjs/graphql';
import { Country, PlayerLevel, PlayerPosition, PlayerPredominantHand, Shot } from '../enums';

@InputType()
export class NewPlayerInput {

    @Field(type => String)
    name: string;

    @Field(type => String)
    surname: string;

    @Field(type => String)
    username: string;

    @Field(() => Number)
    age: number;

    @Field(type => PlayerPosition)
    position: PlayerPosition;

    @Field(type => PlayerLevel)
    level: PlayerLevel;

    @Field(type => PlayerPredominantHand)
    predominantHand: PlayerPredominantHand;

    @Field(type => String)
    picture: string;

    @Field(type => Country)
    country: Country;

    @Field(type => String)
    region: string;

    @Field(type => Shot)
    bestShot: Shot;

}
