import create from 'zustand';

export type MovieType = {
  title: string;
  image: string;
}

export const useStore = create<{
  movies: MovieType[];
  addMovie: (movie: MovieType) => void
}>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({movies: [...state.movies, movie]}))
}))