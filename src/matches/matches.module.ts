import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Match } from './matches.entity';
import { MatchesResolver } from './matches.resolver';
import { MatchesService } from './matches.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Match] })],
  providers: [MatchesService, MatchesResolver]
})
export class MatchesModule {}
