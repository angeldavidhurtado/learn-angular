interface Character {
  id: number
  name: string
  power: number
}

import { Component, signal } from '@angular/core'

@Component({
  templateUrl: './dragonball-page.component.html',
  selector: 'dragonball',
})
export class DragonballPageComponent {
  name = signal('Gohan')
  power = signal(100)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegetta', power: 777 },
    { id: 3, name: 'Trunks', power: 227 },
    { id: 4, name: 'Yamcha', power: 500 },
  ])

  /*
  // myFunction = (e: Event & { target: HTMLInputElement }) => {
  myFunction = (e: Event, asdf: string) => {
    const inputElement = e.target as HTMLInputElement
    console.log(e)
    console.log(asdf)
  }

  myFunction = (e: HTMLInputElement, asdf: string) => {
    console.log(e)
    console.log(asdf)
  }
  */

  addCharacter = () => {
    if (!this.name() || !this.power() || this.power() <= 0)
      return

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    // forma NO recomendada de actualizar el signal
    // this.characters().push(character)

    // forma RECOMENDADA de actualizra el signal
    this.characters.update((list) => [...list, newCharacter])

    this.resetFields()
  }


  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
