import { MODULE_ABBREV, MODULE_ID, MySettings } from './constants';
import { log } from './helpers';

/**
 * Iterates over the user-defined ability scores and defines them in the expected game.dnd5e.config objects
 */
export function defineAbilityScores() {
  const customAbilities = game.settings.get(MODULE_ID, MySettings.customAbilities);

  if (!customAbilities) {
    return;
  }

  log(true, 'Defining Custom Ability Scores', {
    customAbilities,
  });

  // define custom abilities
  customAbilities.forEach(({ title, abbreviation }) => {
    game.dnd5e.config.abilities[abbreviation] = title;
    game.dnd5e.config.abilityAbbreviations[abbreviation] = abbreviation;
  });
}

/**
 * Iterates over the user-defined ability scores and adds them to the dnd5e actor data model
 */
export function extendPrepareDataWithAbilities() {
  const customAbilities = game.settings.get(MODULE_ID, MySettings.customAbilities);

  if (!customAbilities) {
    return;
  }

  log(true, 'Appending Custom Abilities to dnd5e Data Model', {
    customAbilities,
  });

  const abilities = this._data.data.abilities;

  // add custom abilities to the 5eActor data model
  customAbilities.forEach(({ abbreviation }) => {
    abilities[abbreviation] = { value: 10, proficient: 0, ...abilities[abbreviation] };
  });
}
