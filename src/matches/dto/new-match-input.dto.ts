import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewMatchInput {

    @Field(type => Date)
    date: Date;

    @Field(type => String)
    place: string;

    @Field(type => String)
    teamA_leftPlayer: string;

}
