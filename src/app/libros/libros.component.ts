import { Component, OnInit } from '@angular/core';
import { LibroJsonService } from '../libro-json.service';
import { MessageService } from '../messages.service';
import { Libro } from '../Libro';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // de una
  libros?: Libro[];
  libroEditarID: string = "";

  constructor(private librosJsonService: LibroJsonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getLibros();
  }
  onDelete(id: string, titulo: string): void {
    if (this.libros) {
      let beforeListLength = this.librosJsonService.getLibros()?.length; // length antes de borrar
      this.libros = this.libros.filter(libro => libro.id != id);
      this.librosJsonService.setLibros(this.libros);
      let afterListLength = this.librosJsonService.getLibros()?.length; // length después de borrar


      if (beforeListLength == afterListLength) { // si no ha cambiado el .LENGTH, es pq no se ha borrado por alguna razón.
        this.messageService.add("No se pudo borrar el libro '" + titulo + "'", "bad");
      } else {
        this.messageService.add("Libro '" + titulo + "' borrado correctamente.", "good");
      }
    }
  }
  onEdit(id: string): void {
    this.libroEditarID = id;
  }
  onConfirmEdit(): void {
    this.libroEditarID = "";
    this.messageService.add("Libro editado correctamente.", "good");
  }
  getLibros(): void {
    this.libros = this.librosJsonService.getLibros();
  }

}
