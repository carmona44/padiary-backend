import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewMatchInput {

    @Field(type => Date)
    date: Date;

}
