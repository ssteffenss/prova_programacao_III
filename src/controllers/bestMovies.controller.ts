import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { bestMoviesService } from '../services/bestMovies.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import bestMoviesOutput from '../models/dto/output/bestMovies.output';
import bestMoviesInput from '../models/dto/input/bestMovies.input';

@ApiTags('bestMovies')
@Controller('bestMovies')
export class bestMoviesController {
  constructor(private readonly bestMoviesService: bestMoviesService) {}

  @Get()
  @ApiCreatedResponse({ type: bestMoviesOutput, isArray: true })
  findAll(): Promise<bestMoviesOutput[]> {
    return this.bestMoviesService.findAll();
  }

  @Post()
  save(@Body() input: bestMoviesInput) {
    return this.bestMoviesService.save(input);
  }
  @Put(':id')
  @ApiCreatedResponse({ type: bestMoviesOutput })
  update(
    @Param(':id') id: string,
    @Body() input: bestMoviesInput,
  ): Promise<bestMoviesOutput> {
    return this.bestMoviesService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: bestMoviesOutput })
  findOne(@Param('id') id: string) {
    return this.bestMoviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: bestMoviesOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.bestMoviesService.updateName(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bestMoviesService.remove(+id);
  }
}
