import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FilmMedia } from "./film-media.entity";

@Entity({ name: 'films' })
export class Film {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    title: string;

    @Column('int', { unique: true })
    episode_id: number;

    @Column({ type: 'text', nullable: true })
    opening_crawl: string;

    @Column({ type: 'text', nullable: true })
    director: string;

    @Column({ type: 'text', nullable: true })
    producer: string;

    @Column({ type: 'date', nullable: true })
    release_date: Date;

    @Column({ type: 'text', nullable: true })

    url: string;

    @Column({ type: 'text', array: true, default: [] })
    characters: string[];


    @OneToMany(() => FilmMedia, filmMedia => filmMedia.film,
        {
            cascade: true,
            eager: true,

        }
    )
    medias?: FilmMedia[];

    @BeforeInsert()
    checkUrl() {
        if (!this.url) {
            this.url = `api/films/${this.episode_id}`;
        }
    }

}
