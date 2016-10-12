import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { PokemonListComponent }  from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
      { path: 'pokemons', component: PokemonListComponent },
      { path: 'pokemon/:id', component: PokemonCardComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}