import { Component, inject } from '@angular/core'
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component'
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component'
import { DragonballService } from '../../services/dragonball.service'

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
  selector: 'dragonball-super',
})
export class DragonballSuperPageComponent {
  dragonballService = inject(DragonballService)

  /*
  // forma antigua de inyectar dependencias

  constructor(
    public dragonballService: DragonballService
  ) {}

  addCharacter() {
    this.dragonballService
  }
  */
}
