import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      typePaths: ['./**/*.graphql'],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    HttpModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
