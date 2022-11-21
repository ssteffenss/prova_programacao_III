import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import bestMoviesEntity from '../models/entities/bestMovies.entity';
import { InjectRepository } from '@nestjs/typeorm';

import bestMoviesConverter from '../models/converters/bestMovies.converter';
import bestMoviesInput from '../models/dto/input/bestMovies.input';
import bestMoviesOutput from '../models/dto/output/bestMovies.output';

@Injectable()
export class bestMoviesService {
  constructor(
    @InjectRepository(bestMoviesEntity)
    private readonly userRepo: Repository<bestMoviesEntity>,
    private readonly bestMoviesConverter: bestMoviesConverter,
  ) {}

  async findAll(): Promise<bestMoviesOutput[]> {
    const bestMoviesEntities = await this.userRepo.find();

    const outputList = bestMoviesEntities.map((entity) => {
      return this.bestMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: bestMoviesInput) {
    const entity = new bestMoviesEntity();

    const convertedEntity = this.bestMoviesConverter.inputToEntity(
      input,
      entity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.bestMoviesConverter.entityToOutput(savedEntity);

    return output;
  }
  async update(
    id: number,
    input: bestMoviesInput,
  ): Promise<bestMoviesOutput> {
    const bestMoviesEntity = await this.userRepo.findOne({
      where: { id: id },
    });

    const convertedEntity = this.bestMoviesConverter.inputToEntity(
      input,
      bestMoviesEntity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.bestMoviesConverter.entityToOutput(savedEntity);

    return output;
  }
  async findOne(id: number) {
    const bestMoviesEntity = await this.userRepo.findOne({
      where: { id: id },
    });

    const output =
      this.bestMoviesConverter.entityToOutput(bestMoviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const bestMoviesEntity = await this.userRepo.findOne({ where: { id } });

   bestMoviesEntity.titulo = name;

    const bestMoviesSaved = await this.userRepo.save(bestMoviesEntity);

    const output =
      this.bestMoviesConverter.entityToOutput(bestMoviesSaved);

    return output;
  }
  s;
  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
