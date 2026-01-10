import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { CharacterList } from '../../components/dragonballl/character-list/character-list';
import { CharacterAdd } from '../../components/dragonballl/character-add/character-add';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
