import { Repository, EntityRepository } from '@mikro-orm/core';
import { Player } from './players.entity';

@Repository(Player)
export class PlayerRepository extends EntityRepository<Player> {}