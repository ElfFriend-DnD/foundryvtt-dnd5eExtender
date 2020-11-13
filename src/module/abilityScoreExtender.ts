import { MODULE_ABBREV, MODULE_ID, MySettings } from './constants';
import { log } from './helpers';
import { libWrapper } from './libWrapperShim';

export function extendAbilityScores() {
  log(true, 'Activating Custom Ability Scores');

  // define sanity as ability
  game.dnd5e.config.abilities['san'] = 'Sanity';
  game.dnd5e.config.abilityAbbreviations['san'] = 'san';

  // define honor as ability
  game.dnd5e.config.abilities['hon'] = 'Honor';
  game.dnd5e.config.abilityAbbreviations['hon'] = 'hon';

  // add our custom skills to 5eActor data model
  libWrapper.register(
    MODULE_ID,
    'game.dnd5e.entities.Actor5e.prototype.prepareData',
    function (prepareData) {
      log(false, 'extending prepareData with abilities information', {
        _data: this._data,
      });

      // add sanity to the 5eActor data model
      const abilities = this._data.data.abilities;
      abilities['san'] = { value: 10, proficient: 0, ...abilities['san'] };
      abilities['hon'] = { value: 10, proficient: 0, ...abilities['hon'] };

      return prepareData();
    },
    'WRAPPER'
  );
}
