import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LibrosComponent } from './libros/libros.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';


const routes: Routes = [
  {path: "", component: LibrosComponent},
  {path: "nuevo-libro", component: NuevoLibroComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
