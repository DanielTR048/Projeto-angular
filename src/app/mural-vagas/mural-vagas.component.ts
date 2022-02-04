import { Component, NgModule, OnInit } from '@angular/core';
import { RegioesService } from '../regioes.service';
import { regiao } from '../models/regiao_cursos.model';
import { cursos } from '../models/regiao_cursos.model';


@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})

export class MuralVagasComponent implements OnInit {

  public regioes: regiao[] = []; 
  public cursosz: cursos[] = [];

  constructor(private _regiaoservice: RegioesService) { }

ngOnInit(): void {

this.listarfacul();
this.listarcurso();

}


listarfacul(){

this._regiaoservice.getregiao()
  .subscribe(
    retornaregiao => {
      this.regioes = retornaregiao.map(
                item => { 
          return new regiao(
            item.quantfacul,
            item.faculdade_privada,
            item.faculdade_privada2,
            item.faculdade_privada3,
            item.faculdade_publica 
                );

        }
      )
      
    }
  )

}

listarcurso(){
  this._regiaoservice.getcursos()
  .subscribe(
    retornacursos => {
      this.cursosz = retornacursos.map(
          item1 => {
          return new cursos(
            item1.quantcursos,
            item1.faculdade_privada,
            item1.faculdade_privada2,
            item1.faculdade_privada3,
            item1.faculdade_publica
          );

        }
      )
      
    }
  );
}



}



