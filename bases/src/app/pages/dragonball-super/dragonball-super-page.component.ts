interface Character {
  id: number
  name: string
  power: number
}

import { Component, signal } from '@angular/core'

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
})
export class DragonballSuperPageComponent {
  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 10, name: 'Goku', power: 9001 },
    { id: 20, name: 'Vegetta', power: 777 },
  ])

  addCharacter = () => {
    if (!this.name() || !this.power() || this.power() <= 0)
      return

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update((list) => [...list, newCharacter])
    this.resetFields()
  }


  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
