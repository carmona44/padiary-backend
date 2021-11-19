import { Injectable } from '@nestjs/common';
import { NewMatchInput } from './dto/new-match-input.dto';
import { Match } from './matches.entity';
import { MatchRepository } from './matches.repository';

@Injectable()
export class MatchesService {

    constructor(
        private readonly matchRepository: MatchRepository,
    ) {}

    async findAll(): Promise<Match[]> { 
        return this.matchRepository.findAll();
    }

    async findOneById(id: string): Promise<Match> { 
        return this.matchRepository.findOne(id);
    }

    async create(newMatchInput: NewMatchInput): Promise<Match> {   
        const newMatch = new Match(newMatchInput);
        await this.matchRepository.persistAndFlush(newMatch);
        return newMatch;
    }

}
