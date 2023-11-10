/// <reference types="vite/client" />

export interface Data {
    page: number;
    results: Array<object>;
    total_pages: number;
    total_results: number;
}

export interface Playing {
    page: number;
    results: Array<object>;
    total_pages: number;
    total_results: number;
}

export interface Film {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: Array,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Array,
    production_countries: Array,
    release_date: Date,
    revenue: number,
    runtime: number,
    spoken_languages : Array,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}
