import { Injectable } from '@angular/core';

@Injectable()
export class PokemonesService {
    private pokemones: Pokemon[] = [
        {
		      id: 1,
          name: 'Bulbasaur',
          bio: "A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.",
          img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
          spawn_time: '20:00',
          type:"Grass"
        },
        {
		      id: 2,
          name: 'Ivysaur',
          bio: "Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes. Si empieza a pasar más tiempo al sol, será porque el bulbo está a punto de hacerse una flor grande.",
          img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
          spawn_time: '07:00',
          type:"Fire"
        },
        {
          id: 3,
          name: 'Venusaur',
          bio: "Venusaur tiene una flor enorme en el lomo que, según parece, adquiere unos colores muy vivos si está bien nutrido y le da mucho el sol. El aroma delicado de la flor tiene un efecto relajante en el ánimo de las personas.",
          img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
          spawn_time: '11:30',
          type:"Fire"
        },
        {
          id: 4,
          name: 'Charmander',
          bio: "La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.",
          img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
          spawn_time: '08:45',
          type:"Grass"
        },
        {
          id: 5,
          name: 'Charmeleon',
          bio: "Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene. Si su enemigo es fuerte, se vuelve agresivo, y la llama que tiene en el extremo de la cola empieza a arder con mayor intensidad tornándose azulada.",
          img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
          spawn_time: '19:00',
          type:"Grass"
        },
        {
          id: 6,
          name: 'Charizard',
          bio: "Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.",
          img: 'http://www.serebii.net/pokemongo/pokemon/006.png',
          spawn_time: '13:34',
          type:"Fire"
        },
        {
          id: 7,
          name: 'Squirtle',
          bio: "El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.",
          img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
          spawn_time: '04:25',
          type:"Fire"
        }
      ];
    constructor(){
        console.log('Servicio listo para usar!!!');
    }
    getPokemones(): Pokemon[]{
        return this.pokemones;
    }
    getPokemon(idx: string){
      return this.pokemones[idx];
    }
    buscarPokemones(termino: string){
      let pokemonsArr: Pokemon[] = [];
      termino = termino.toLowerCase();

      for ( let pokemon of this.pokemones ) {
        let name = pokemon.name.toLowerCase();
        if (name.indexOf(termino) >= 0) {
          pokemonsArr.push(pokemon);
        }
      }
      return pokemonsArr;
    }
}

export interface Pokemon{
    id: number;
    name: string;
    bio: string;
    img: string;
    spawn_time: string;
    type: string;
}