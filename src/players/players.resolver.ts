import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { NewPlayerInput } from "./dto/new-player-input.dto";
import { Player } from "./players.entity";
import { PlayersService } from "./players.service";

@Resolver(of => Player)
export class PlayersResolver {

    constructor(
      	private readonly playersService: PlayersService,
    ){}

    @Query(() => [Player])
    async getAllPlayers(): Promise<Player[]> {
      	return this.playersService.findAll();
    }

    @Query(() => Player)
    async getPlayerById(@Args('id') id: string): Promise<Player> {
        const player = await this.playersService.findOneById(id);
        if (!player) {
          throw new NotFoundException(id);
        }
        return player;
    }

    @Mutation(() => Player)
    async addPlayer(@Args('newPlayerInput') newPlayerInput: NewPlayerInput): Promise<Player> {
      	return this.playersService.create(newPlayerInput);
    }

}