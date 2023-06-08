export class MovieLibrary {
  constructor() {
    this.library = [];
    this.loadLibraryFromLocalStorage();
  }

  loadLibraryFromLocalStorage() {
    const libraryJSON = localStorage.getItem('myLibrary');
    this.library = libraryJSON ? JSON.parse(libraryJSON) : [];
  }

  saveLibraryToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(this.library));
  }

  isFilmInLibrary(id) {
    return this.library.some((libraryFilm) => libraryFilm.id == id);
  }

  addFilmToLibrary(film) {
    this.library.push(film);
    this.saveLibraryToLocalStorage();
  }

  removeFilmFromLibrary(film) {
    const index = this.library.findIndex((libraryFilm) => libraryFilm.id === film.id);
    if (index !== -1) {
      this.library.splice(index, 1);
      this.saveLibraryToLocalStorage();
    }
  }
}
