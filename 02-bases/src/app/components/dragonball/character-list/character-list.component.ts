import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  // characters = input() // lee los parametros del componente
  characters = input.required<Character[]>() // parametros obligatorios
  listName = input.required<string>()
}
