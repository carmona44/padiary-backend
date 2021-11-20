import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { NewMatchInput } from "./dto/new-match-input.dto";
import { Match } from "./matches.entity";
import { MatchesService } from "./matches.service";

@Resolver(of => Match)
export class MatchesResolver {

    constructor(
        private readonly matchesService: MatchesService,
    ){}

    @Query(() => [Match])
    async getAllMatches(): Promise<Match[]> {
        return this.matchesService.findAll();
    }

    @Query(() => Match)
    async getMatchById(@Args('id') id: string): Promise<Match> {
        const match = await this.matchesService.findOneById(id);
        if (!match) {
            throw new NotFoundException(id);
        }
        return match;
    }

    @Mutation(() => Match)
    async addMatch(@Args('newMatchInput') newMatchInput: NewMatchInput): Promise<Match> {
        return this.matchesService.create(newMatchInput);
    }

}