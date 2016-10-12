import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { pokeapiURL, imageURL, pokeapiRes } from './config'


interface PokemonResponse {
  pokemons: Pokemon[];
  next: string;
}

@Injectable()
export class PokemonService {
  constructor(private http: Http) {
  }



  getPokemons(resource): Observable<PokemonResponse> {
    return this.http.get(pokeapiURL+resource)
                    .map(this.extractPokemons)
                    .catch(this.handleError);
  }
  getPokemon(id): Observable<Pokemon> {
    return this.http.get(pokeapiURL+pokeapiRes+id)
                    .map(this.extractPokemon)
                    .catch(this.handleError);
  }
  private extractPokemons(res: Response) {
    let body = res.json();
    let objects = body.objects;
    let next:string = body.meta.next;
    let pokemons:Pokemon[] = [];
    if (objects) {
      pokemons = objects.map(pokemon => {
          return {
            name: pokemon.name,
            id: pokemon.national_id,
            image: `${imageURL}${pokemon.national_id}.png`,
            types: pokemon.types
          };
      })
    } 
    return { pokemons, next };
  }

  private extractPokemon(res: Response) {
    let body = res.json();
    let pokemon:Pokemon = {
            name: body.name,
            id: body.national_id,
            image: `${imageURL}${body.national_id}.png`,
            types: body.types,
            attack: body.attack,
            defense: body.defense,
            HP: body.hp,
            speed: body.speed,
            weight: body.weight
          }
    return pokemon;
  }

  private handleError (error: any) {
    let errMsg = 'error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
