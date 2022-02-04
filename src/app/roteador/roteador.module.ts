import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { SegundoMuralComponent } from '../segundo-mural/segundo-mural.component';
import { NavComponent } from '../nav/nav.component';

const routes: Routes = [
{ path: 'menu', component: NavComponent },
{ path: 'mural', component: MuralVagasComponent },
{ path: 'mural2', component: SegundoMuralComponent }, ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule] })
export class AppRoutingModule { }