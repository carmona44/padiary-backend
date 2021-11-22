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

    @Field(type => String)
    comments: string;

    @Field(type => Number)
    effort: number;

    @Field(type => String)
    mvp: string;

    @Field(type => Number)
    duration: number;

    @Field(type => [Number])
    teamA_result: number[];

    @Field(type => [Number])
    teamB_result: number[];

}
