import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Match } from 'src/matches/matches.entity';
import { Player } from './players.entity';
import { PlayersResolver } from './players.resolver';
import { PlayersService } from './players.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Player, Match] })],
  providers: [PlayersService, PlayersResolver]
})
export class PlayersModule {}
