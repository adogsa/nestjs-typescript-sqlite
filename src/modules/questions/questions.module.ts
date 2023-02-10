import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '@entities/question';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { Questionnaire } from '@entities/questionnaire';
import { Category } from '@entities/category';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire, Category, Question])],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
