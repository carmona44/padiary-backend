import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewMatchInput {

    @Field(type => Date)
    date: Date;

    @Field(type => String)
    place: string;

    @Field(type => String)
    teamA_leftPlayer: string;

    @Field(type => String)
    teamA_rightPlayer: string;

    @Field(type => String)
    teamB_leftPlayer: string;

    @Field(type => String)
    teamB_rightPlayer: string;

}
