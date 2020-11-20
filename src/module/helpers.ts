import { MODULE_ID, MySettings } from './constants';

export function log(force: boolean, ...args) {
  const debugModeSetting = game.settings.get(MODULE_ID, MySettings.debugMode);

  if (force || CONFIG[MODULE_ID]?.debug || debugModeSetting) {
    console.log(MODULE_ID, '|', ...args);
  }
}
