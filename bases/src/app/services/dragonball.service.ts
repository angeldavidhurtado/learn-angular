import { Injectable, signal } from "@angular/core";
import type { Character } from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>([
    { id: crypto.randomUUID(), name: 'Goku', power: 9001 },
    { id: crypto.randomUUID(), name: 'Vegetta', power: 777 },
  ])

  addCharacter = (newCharacter: Character) => {
    this.characters.update(list => [...list, newCharacter])
  }
}
