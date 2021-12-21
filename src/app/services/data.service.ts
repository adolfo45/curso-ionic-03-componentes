import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../pages/interfaces/componente.interface';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

    obtenerUsuarios(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    obtenerMenu(){
      return this.http.get<Componente[]>('../assets/Data/menu-options.json');
    }

    obtenerAlbums(){
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
    }

    obtenerHeroes(){
      return this.http.get<any[]>('../assets/Data/superheroes.json')
      .pipe(
        delay(1500)
      )
    }

}
