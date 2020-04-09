import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
})
export class PokemonComponent{
    pokemon: any = {};
    constructor( private activatedRoute: ActivatedRoute,
                 private _pokemonesService: PokemonesService ){
        this.activatedRoute.params.subscribe( params => {
            console.log('Soy de pokemon.component.ts',params['id']);
            this.pokemon = this._pokemonesService.getPokemon(params['id']);
        });
    }
}