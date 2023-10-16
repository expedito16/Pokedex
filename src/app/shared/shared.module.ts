import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeHeaderComponent
  ]
})
export class SharedModule { }
