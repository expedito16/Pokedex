import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { SearchComponent } from './search/search.component';
import { PokeListComponent } from './poke-list/poke-list.component';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    SearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeHeaderComponent,
    SearchComponent,
    PokeListComponent
  ]
})
export class SharedModule { }
