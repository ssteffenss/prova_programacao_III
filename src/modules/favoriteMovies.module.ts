import { Module } from '@nestjs/common';
import { bestMoviesService } from '../services/bestMovies.service';
import { bestMoviesController } from '../controllers/bestMovies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import bestMoviesEntity from '../models/entities/bestMovies.entity';
import bestMoviesConverter from '../models/converters/bestMovies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([bestMoviesEntity])],
  controllers: [bestMoviesController],
  providers: [bestMoviesService, bestMoviesConverter],
})
export class BestMoviesModule {}
