import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { pokeapiURL, imageURL } from './config'


interface PokemonResponse {
  pokemons: Pokemon[];
  next: string;
}

@Injectable()
export class PokemonService {
  constructor(private http: Http) {
  }



  getPokemons(resource): Observable<PokemonResponse> {
    console.log('start fetching from ', resource)
    return this.http.get(pokeapiURL+resource)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    let objects = body.objects;
    let next:string = body.meta.next;
    let pokemons:Pokemon[];
    if (objects) {
      pokemons = objects.map(pokemon => {
          return {
            name: pokemon.name,
            id: pokemon.national_id,
            image: `${imageURL}${pokemon.national_id}.png`
          };
      })
    } 
    else {
        pokemons = [];
    }
    return { pokemons, next };
  }
  private handleError (error: any) {
    let errMsg = 'error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
