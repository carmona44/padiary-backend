import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Player } from 'src/players/players.entity';
import { PlayersModule } from 'src/players/players.module';
import { Match } from './matches.entity';
import { MatchesResolver } from './matches.resolver';
import { MatchesService } from './matches.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Match, Player] }), PlayersModule],
  providers: [MatchesService, MatchesResolver]
})
export class MatchesModule {}
