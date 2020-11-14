import { MODULE_ABBREV, MODULE_ID, MySettings } from './constants';
import { log } from './helpers';

/**
 * Iterates over the user-defined ability scores and defines them in the expected game.dnd5e.config objects
 */
export function defineAbilityScores() {
  log(true, 'Defining Custom Ability Scores');

  // define sanity as ability
  game.dnd5e.config.abilities['san'] = 'Sanity';
  game.dnd5e.config.abilityAbbreviations['san'] = 'san';

  // define honor as ability
  game.dnd5e.config.abilities['hon'] = 'Honor';
  game.dnd5e.config.abilityAbbreviations['hon'] = 'hon';
}

/**
 * Iterates over the user-defined ability scores and adds them to the dnd5e actor data model
 */
export function extendPrepareDataWithAbilities() {
  log(true, 'Appending Custom Abilities to dnd5e Data Model');
  log(false, 'extending prepareData with abilities information', {
    _data: this._data,
  });

  // add sanity to the 5eActor data model
  const abilities = this._data.data.abilities;
  abilities['san'] = { value: 10, proficient: 0, ...abilities['san'] };
  abilities['hon'] = { value: 10, proficient: 0, ...abilities['hon'] };
}
