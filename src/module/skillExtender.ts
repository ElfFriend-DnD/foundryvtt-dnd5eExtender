import { MODULE_ABBREV, MODULE_ID, MySettings } from './constants';
import { log } from './helpers';

/**
 * Iterates over the user-defined skills and defines them in game.dnd5e.config.skills
 */
export function defineSkills() {
  const customSkills = game.settings.get(MODULE_ID, MySettings.customSkills);
  log(true, 'Defining Custom Skills', {
    customSkills,
  });

  // define custom abilities
  customSkills.forEach(({ title, abbreviation }) => {
    game.dnd5e.config.skills[abbreviation] = title;
  });
}

/**
 * Iterates over the user-defined skills and adds them to the dnd5e actor data model
 */
export function extendPrepareDataWithSkills() {
  log(false, 'extending prepareData with skill information', {
    _data: this._data,
  });

  const customSkills = game.settings.get(MODULE_ID, MySettings.customSkills);

  log(true, 'Appending Custom Skills to dnd5e Data Model', {
    customSkills,
  });

  const skills = this._data.data.skills;

  if (!!skills) {
    // add custom abilities to the 5eActor data model
    customSkills.forEach(({ abbreviation, ability }) => {
      skills[abbreviation] = { value: 0, ability: ability, ...skills[abbreviation] };
    });
  }
}
