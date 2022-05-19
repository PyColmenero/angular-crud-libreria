import { Injectable } from '@angular/core';
import { Libro } from './Libro';
import { libros } from './libros-json';


@Injectable({
  providedIn: 'root'
})
export class LibroJsonService {

  listalibros?: Libro[];
  error: string = "";

  constructor() {
    this.listalibros = libros;
  }

  getLibros(): Libro[] | undefined {
    return this.listalibros;
  }
  addLibro(libro: Libro): void {
    this.listalibros?.push(libro);
  }
  setLibros(libros: Libro[]): void {
    this.listalibros = libros;
  }
  onError(error: string): void{
    this.error = error;
  }
}
