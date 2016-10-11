import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from '../shared/pokemon'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  next: string;
  isFetching: boolean = true;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
    this.fetchPokemons(`/api/v1/pokemon/?limit=12`);
  }

  fetchPokemons(resource) {
    this.isFetching = true;
    this.PokemonService.getPokemons(resource)
                       .subscribe(
                           data => {
                             console.log(data.pokemons)
                             this.pokemons = [...this.pokemons, ...data.pokemons];
                             this.next = data.next;
                             this.isFetching = false;
                           }
                         );
  }

}
