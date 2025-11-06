import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {
  counter = 0
  counterSignal = signal(0)

  increaseBy(value: number) {
    this.counter += value
    this.counterSignal.update( currentValue => currentValue + value )
  }
  
  decreaseBy(value: number) {
    this.counter -= value
    this.counterSignal.update( currentValue => currentValue - value )
  }

  resetCounter(value: number) {
    this.counter = value
    this.counterSignal.set(0)
  }
}
