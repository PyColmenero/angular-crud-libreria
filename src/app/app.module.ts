import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BodyComponent } from './body/body.component';
import { LibrosComponent } from './libros/libros.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    AlertsComponent,
    BodyComponent,
    LibrosComponent,
    NuevoLibroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
