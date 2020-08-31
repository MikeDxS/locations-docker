import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsController } from './locations/locations.controller';
import { LocationsService } from './locations/locations.service';
import { Location } from './locations/locations.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'locationsdba',
    password: 'secreto',
    database: 'locations_test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([ Location ])
],
  controllers: [AppController, LocationsController],
  providers: [AppService, LocationsService],
})
export class AppModule {}
