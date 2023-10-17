import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;
  loading = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        this.loading = false;
      },
      error => {
        this.apiError = true;
        this.loading = false;
      }
    );
  }

  public getSearch(value: string){
    this.loading = true;
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
    this.loading = false;
  }
}
