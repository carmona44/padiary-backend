import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { UsersModule } from 'src/users/users.module';
import { Match } from './matches.entity';
import { MatchesResolver } from './matches.resolver';
import { MatchesService } from './matches.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Match, User] }), UsersModule],
  providers: [MatchesService, MatchesResolver]
})
export class MatchesModule {}
