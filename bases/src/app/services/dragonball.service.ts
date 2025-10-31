import { effect, Injectable, signal } from "@angular/core";
import type { Character } from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>([
    { id: crypto.randomUUID(), name: 'Goku', power: 9001 },
    { id: crypto.randomUUID(), name: 'Vegetta', power: 777 },
  ])

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter = (newCharacter: Character) => {
    this.characters.update(list => [...list, newCharacter])
  }
}

// https://www.youtube.com/watch?v=4i5vZnWiNt0&list=PLCKuOXG0bPi3cfoQcSTaGUnqZbzLA30Hi&index=30
