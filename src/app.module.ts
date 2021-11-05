import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4xfzu.mongodb.net/music-app?retryWrites=true&w=majority`,
    ),
    TrackModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
