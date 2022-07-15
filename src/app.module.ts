import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot('mongodb://localhost:27017/musicdb'),
    TrackModule,
    FileModule
  ],
})
export class AppModule {}
