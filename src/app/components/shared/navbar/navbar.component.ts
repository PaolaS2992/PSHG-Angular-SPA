import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    constructor(
        private router: Router){
    }
    ngOnInit(){

    }
    // capturar el termino desde el input text.
    buscarPokemon( termino: string ){
        console.log('capturo info de text - navbar.component.ts ', termino);
        this.router.navigate(['/buscar', termino]);
    }

}