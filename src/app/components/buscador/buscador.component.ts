import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit{
    pokemones: any[] = [];
    termino: string
    constructor(private activatedRoute: ActivatedRoute,
                private _pokemonesService: PokemonesService){}
    ngOnInit(){
        // capturar el termino desde la URL.
        this.activatedRoute.params.subscribe( params => {
            console.log('capturo termino de URL - buscador.components.ts ', params['termino']);
            this.termino = params['termino'];
            this.pokemones = this._pokemonesService.buscarPokemones( params['termino'] );
            console.log('resultados encontrados: ', this.pokemones);
        })
    }
}