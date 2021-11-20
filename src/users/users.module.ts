import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Match } from 'src/matches/matches.entity';
import { User } from './users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User, Match] })],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
