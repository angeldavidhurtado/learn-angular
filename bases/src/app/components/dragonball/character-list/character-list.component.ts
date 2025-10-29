import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  // characters: input.required() // parametros obligatorios
  characters: input() // lee los parametros del componente
}

// https://youtu.be/yfSzRMV_MLc?si=Vux8eeKtcftDZu74&t=380
