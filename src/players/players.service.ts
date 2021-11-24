import { Injectable } from '@nestjs/common';
import { NewPlayerInput } from './dto/new-player-input.dto';
import { Player } from './players.entity';
import { PlayerRepository } from './players.repository';

@Injectable()
export class PlayersService {

    constructor(
        private readonly playerRepository: PlayerRepository,
    ) {}

    async findAll(populate?: any[]): Promise<Player[]> { 
        return this.playerRepository.findAll(populate);
    }

    async findOneById(id: string, populate?: any[]): Promise<Player> { 
        return this.playerRepository.findOne(id, populate);
    }

    async create(newPlayerInput: NewPlayerInput): Promise<Player> {   
        const newPlayer = new Player(newPlayerInput);
        await this.playerRepository.persistAndFlush(newPlayer);
        return newPlayer;
    }

}
