import { Repository, EntityRepository } from '@mikro-orm/core';
import { Match } from './matches.entity';

@Repository(Match)
export class MatchRepository extends EntityRepository<Match> {}