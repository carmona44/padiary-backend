import { Entity, EntityRepositoryType, PrimaryKey, Property, wrap } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { NewMatchInput } from './dto/new-match-input.dto';
import { MatchRepository } from './matches.repository';

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

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(newMatchInput: NewMatchInput) {
        this.date = newMatchInput.date;
    }
    
    toJSON(match?: Match) {
        const o = wrap(this).toObject();
        return o;
    }

}
