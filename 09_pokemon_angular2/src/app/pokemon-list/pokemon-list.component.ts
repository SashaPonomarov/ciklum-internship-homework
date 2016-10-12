import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from '../shared/pokemon'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css', '../shared/pokemon-types.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  next: string;
  isFetching: boolean = true;
  selectedTypes: string[] = [];
  uniqueTypes: string[] = [];

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
    this.fetchPokemons(`/api/v1/pokemon/?limit=12`);
  }

  fetchPokemons(resource) {
    this.isFetching = true;
    this.PokemonService.getPokemons(resource)
                       .subscribe(
                           data => {
                             this.pokemons = [...this.pokemons, ...data.pokemons];
                             this.filteredPokemons = this.pokemons;
                             this.next = data.next;
                             this.isFetching = false;
                             this.uniqueTypes = this.findUniqueTypes(data.pokemons, this.uniqueTypes);
                           }
                         );
  }

  findUniqueTypes(pokemons, uniqueTypes) {
    pokemons.map((pokemon) => {
      let typesChunk = pokemon.types.filter((type) => {
                          return !uniqueTypes.some((unique) => {
                            return unique === type.name;
                          })
                        })
      typesChunk.map((type) => {
         uniqueTypes.push(type.name);
      })
    })
    return uniqueTypes;
  }

  toggleType(type) {
    let index:number = this.selectedTypes.indexOf(type);
    if (index === -1) {
      this.selectedTypes.push(type);
    } else {
      this.selectedTypes.splice(index, 1);
    }
    this.filteredPokemons = this.filterPokemons(this.selectedTypes, this.pokemons);

  }

  filterPokemons(selectedTypes, pokemons) {
    if (selectedTypes.length === 0) {
      return pokemons;
    }
    return pokemons.filter((pokemon) => {
      return pokemon.types.some((pokemonType) => {
        return selectedTypes.indexOf(pokemonType.name) !== -1
      })
    })
  }

}
