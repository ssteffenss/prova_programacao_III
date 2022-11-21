import { Injectable } from '@nestjs/common';

import bestMoviesEntity from '../entities/bestMovies.entity';
import bestMoviesOutput from '../dto/output/bestMovies.output';
import bestMoviesInput from '../dto/input/bestMovies.input';

@Injectable()
export default class bestMoviesConverter {
  inputToEntity(input: bestMoviesInput, entity: bestMoviesEntity) {
    entity.id = input.id;
    entity.titulo = input.titulo;
    entity.imagem = input.imagem;
    entity.user_id = input.user_Id;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: bestMoviesEntity): bestMoviesOutput {
    const output = new bestMoviesOutput();

    output.id = entity.id;
    output.titulo = entity.titulo;
    output.imagem = entity.imagem;
    output.user_ID = entity.user_id;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
