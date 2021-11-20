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

    async findAll(): Promise<Match[]> { 
        return this.matchRepository.findAll();
    }

    async findOneById(id: string): Promise<Match> { 
        return this.matchRepository.findOne(id);
    }

    async create(newMatchInput: NewMatchInput): Promise<Match> {   
        const teamA_leftPlayer = await this.userRepository.findOneOrFail(newMatchInput.teamA_leftPlayer);
        const newMatch = new Match(newMatchInput.date, newMatchInput.place, teamA_leftPlayer);
        await this.matchRepository.persistAndFlush(newMatch);
        return newMatch;
    }

}
