import { MODULE_ABBREV, MODULE_ID, MySettings } from './constants';
import { log } from './helpers';
import { libWrapper } from './libWrapperShim';

export function extendSkills() {
  log(true, 'Activating Custom Skills');

  // define technology as a skill
  game.dnd5e.config.skills['tec'] = 'Technology';

  // define Repair as a skill
  game.dnd5e.config.skills['rep'] = 'Repair';

  // add our custom skills to 5eActor data model
  libWrapper.register(
    MODULE_ID,
    'game.dnd5e.entities.Actor5e.prototype.prepareData',
    function (prepareData) {
      log(false, 'extending prepareData with skill information', {
        _data: this._data,
      });

      const skills = this._data.data.skills;
      skills['tec'] = { value: 0, ability: 'int', ...skills['tec'] };
      skills['rep'] = { value: 0, ability: 'int', ...skills['rep'] };

      return prepareData();
    },
    'WRAPPER'
  );
}
