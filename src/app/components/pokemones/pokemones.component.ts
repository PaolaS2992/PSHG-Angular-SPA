import { Component, OnInit } from '@angular/core';
import { PokemonesService, Pokemon } from '../../services/pokemones.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pokemones',
    templateUrl: './pokemones.component.html'
})
export class PokemonesComponent implements OnInit {
    pokemones: Pokemon[] = [];
    constructor(
        private _pokemonesService: PokemonesService,
        private router: Router){
        
    }
    // Ver todos los pokemones.
    ngOnInit() {
        this.pokemones = this._pokemonesService.getPokemones();
        console.log(this.pokemones);
    }
    // Ver Solo un pokemon.
    verPokemon(idx: number){
        this.router.navigate(['/pokemon', idx]);
    }

}