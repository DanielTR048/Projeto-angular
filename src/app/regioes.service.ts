import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { regiao } from './models/regiao_cursos.model';
import { cursos } from './models/regiao_cursos.model';


@Injectable({
  providedIn: 'root'
})


export class RegioesService {

  private url = "http://localhost:3000/regiao";

  private url2 = "http://localhost:3000/cursos";

  constructor(private _httpClient: HttpClient) { }

getregiao(): Observable<regiao[]>{
  return this._httpClient.get<regiao[]>(this.url);
}

getcursos(): Observable<cursos[]>{
  return this._httpClient.get<cursos[]>(this.url2);
}

}

