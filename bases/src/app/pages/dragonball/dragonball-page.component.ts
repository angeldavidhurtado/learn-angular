interface Character {
  id: number
  name: string
  power: number
}

import { Component, signal } from '@angular/core'

@Component({
  templateUrl: './dragonball-page.component.html'
})
export class DragonballComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegetta', power: 777 },
    { id: 3, name: 'Trunks', power: 227 },
  ])
}
