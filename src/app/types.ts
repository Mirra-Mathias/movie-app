export class Movie  {
  genre_ids!: number[];
  id!: number;
  original_title!: string;
  poster_path!: string;
  vote_average!: number;
  spoken_languages!: Language[];
  runtime!: number;
  release_date!: Date;
  tagline!: string;
  genres!: Genre[];
}

interface Language {
  english_name: string
  iso_639_1: string
  name: string
}

interface Genre {
  id: number;
  name: string;
}
