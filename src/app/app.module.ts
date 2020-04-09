import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routers
import { APP_ROUTING } from '../app/app.routes';

// Services
import { PokemonesService } from './services/pokemones.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonesComponent,
    HomeComponent,
    AboutComponent,
    PokemonComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    PokemonesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
