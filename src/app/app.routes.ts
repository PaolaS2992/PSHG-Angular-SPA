import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemones', component: PokemonesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pokemon/:id', component: PokemonComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);