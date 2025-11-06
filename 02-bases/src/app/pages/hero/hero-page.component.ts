import { UpperCasePipe } from '@angular/common'
import { Component, computed, signal } from '@angular/core'

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ángel David Hurtado')
  age = signal(26)
  description = computed(() => { // esto es una señal computada
    return `${this.name()} - ${this.age()}`
  })
  /*
  getHeroDescription() {
    return `${this.name()} - ${this.age()}`
  }
  */

  changeAge() {
    this.age.update(current => current + 1)
  }

  changeName() {
    this.name.set('David Hurtado')
  }

  resetForm() {
    this.name.set('Ángel David Hurtado')
    this.age.set(26)
  }
}
