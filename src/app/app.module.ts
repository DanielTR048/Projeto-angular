import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { SegundoMuralComponent } from './segundo-mural/segundo-mural.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './roteador/roteador.module';


@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
    SegundoMuralComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
