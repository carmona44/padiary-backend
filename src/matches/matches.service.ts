import { Injectable } from '@nestjs/common';
import { NewMatchInput } from './dto/new-match-input.dto';
import { Match } from './matches.entity';
import { MatchRepository } from './matches.repository';
import { UserRepository } from '../users/users.repository';

@Injectable()
export class MatchesService {

    constructor(
        private readonly matchRepository: MatchRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async findAll(populate?: any[]): Promise<Match[]> { 
        return this.matchRepository.findAll(populate);
    }

    async findOneById(id: string, populate?: any[]): Promise<Match> { 
        return this.matchRepository.findOne(id, populate);
    }

    async create(newMatchInput: NewMatchInput): Promise<Match> {   
        const teamA_leftPlayer = await this.userRepository.findOneOrFail(newMatchInput.teamA_leftPlayer);
        const teamA_rightPlayer = await this.userRepository.findOneOrFail(newMatchInput.teamA_rightPlayer);
        const teamB_leftPlayer = await this.userRepository.findOneOrFail(newMatchInput.teamB_leftPlayer);
        const teamB_rightPlayer = await this.userRepository.findOneOrFail(newMatchInput.teamB_rightPlayer);

        const newMatch = new Match(newMatchInput.date, newMatchInput.place, teamA_leftPlayer, teamA_rightPlayer, teamB_leftPlayer, teamB_rightPlayer);
        await this.matchRepository.persistAndFlush(newMatch);
        return newMatch;
    }

}
