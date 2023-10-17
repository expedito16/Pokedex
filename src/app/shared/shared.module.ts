import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { SearchComponent } from './search/search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    SearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    PokeHeaderComponent,
    SearchComponent,
    PokeListComponent,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
