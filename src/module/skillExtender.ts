import { MODULE_ABBREV, MODULE_ID, MySettings } from './constants';
import { log } from './helpers';

/**
 * Iterates over the user-defined skills and defines them in game.dnd5e.config.skills
 */
export function defineSkills() {
  log(true, 'Defining Custom Skills');

  // define technology as a skill
  game.dnd5e.config.skills['tec'] = 'Technology';

  // define Repair as a skill
  game.dnd5e.config.skills['rep'] = 'Repair';
}

/**
 * Iterates over the user-defined skills and adds them to the dnd5e actor data model
 */
export function extendPrepareDataWithSkills() {
  log(true, 'Appending Custom Skills to dnd5e Data Model');
  log(false, 'extending prepareData with skill information', {
    _data: this._data,
  });

  const skills = this._data.data.skills;
  skills['tec'] = { value: 0, ability: 'int', ...skills['tec'] };
  skills['rep'] = { value: 0, ability: 'int', ...skills['rep'] };
}
