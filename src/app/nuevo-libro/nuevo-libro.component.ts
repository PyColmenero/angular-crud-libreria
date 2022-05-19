import { Component, OnInit } from '@angular/core';
import { LibroJsonService } from '../libro-json.service';
import { MessageService } from '../messages.service';
import { Libro } from '../Libro';


@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  titulo: string = "";
  autor: string = "";
  descripcion: string = "";

  libros?: Libro[];

  constructor(private libroJsonService:LibroJsonService,private messageService: MessageService) { }

  ngOnInit(): void { this.getLibros() }

  onSubmit(): void {

    this.getLibros();    

    if(this.libros != undefined){

      if(this.titulo.length < 3){
        this.messageService.add("Título del libro muy corto", "bad");
        return;
      }
      if(this.autor.length < 3){
        this.messageService.add("Autor del libro muy corto", "bad");
        return;
      }
      
      // GET NEW ID
      let id: number = 0;
      let indexLastLibro = this.libros.length-1;
      let lastLibroId = this.libros[indexLastLibro].id;
      id = parseInt(lastLibroId)+1
      
      // PUSH/APPEND libro
      this.libros.push( {"id":id.toString(), "autor":this.autor, "titulo": this.titulo, "descripcion": this.descripcion} )

      // UPDATE libros
      this.libroJsonService.setLibros( this.libros );
    
      // MESSAGE
      this.messageService.add("Libro añadido correctamente.", "good");

      // ERASE FORM
      this.titulo = "";
      this.autor = "";
      this.descripcion = "";

    }
  }
  getLibros(): void {
    this.libros = this.libroJsonService.getLibros();
  }
  

}
