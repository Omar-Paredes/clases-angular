import { Type } from "class-transformer";
import { IsArray, IsDate, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";
import { FilmMedia } from "../entities/film-media.entity";

export class CreateFilmDto {

    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    episode_id: number;

    @IsString()
    @IsOptional()
    opening_crawl: string;

    @IsString()
    @IsOptional()
    director: string;

    @IsString()
    @IsOptional()
    producer: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    release_date: Date;

    @IsString()
    @IsOptional()
    url: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    characters: string[];

    @IsArray()
    @IsOptional()
    medias: FilmMedia[];
}
