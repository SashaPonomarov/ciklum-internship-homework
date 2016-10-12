import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from '../shared/pokemon'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css', '../shared/pokemon-types.css']
})
export class PokemonCardComponent implements OnInit {

  isFetching: boolean = true;
  pokemon: Pokemon;

  constructor(private PokemonService: PokemonService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.PokemonService.getPokemon(+params['id']).subscribe(
        data => {
          this.pokemon = data;
          this.isFetching = false;
        })
    })
  }

}
