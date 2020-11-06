// Import TypeScript modules
import { registerSettings } from './module/settings';
import { preloadTemplates } from './module/preloadTemplates';
import { MODULE_ABBREV, MODULE_ID, MySettings } from './module/constants';
import { log } from './module/helpers';
import { libWrapper } from './module/libWrapperShim';

/**
 * Actor Creation:
 *
 */

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
  log(true, `Initializing ${MODULE_ID}`);

  $('body').addClass('dnd5e-extender');

  // Register custom module settings
  registerSettings();

  // Preload Handlebars templates
  await preloadTemplates();

  // const dnd5e = game.dnd5e;

  log(false, { dnd5e: game.dnd5e });

  // define sanity as ability
  game.dnd5e.config.abilities['san'] = 'Sanity';
  game.dnd5e.config.abilityAbbreviations['san'] = 'san';

  // RED HERRING
  libWrapper.register(
    MODULE_ID,
    'game.dnd5e.entities.Actor5e.prototype._prepareCharacterData',
    function (_prepareCharacterData, actorData) {
      debugger;

      log(false, 'extend _prepareCharacterData', {
        actorData,
      });

      return _prepareCharacterData(actorData);
    },
    'WRAPPER'
  );

  // add our custom abilities to 5eActor data model
  libWrapper.register(
    MODULE_ID,
    'game.dnd5e.entities.Actor5e.prototype.prepareData',
    function (prepareData) {
      debugger;

      log(false, 'extend prepareData', {
        _data: this._data,
      });

      // add sanity to the 5eActor data model
      const abl = this._data.data.abilities;
      abl['san'] = abl['san'] || { value: 10, proficient: 0 };

      return prepareData();
    },
    'WRAPPER'
  );

  Hooks.call(`DND5eExtendedReady`);
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function () {
  // Do anything once the module is ready
  log(false, {
    actors: game.actors,
  });

  // game.actors
  //   .filter((actor) => actor.data.type === 'character')
  //   .forEach((actor) => {
  //     log(false, 'updating actors with san');
  //     actor.update({
  //       field: 'data.abilities.san',
  //       value: {
  //         value: 10,
  //         proficient: 0,
  //       },
  //     });
  //   });
});

// Add any additional hooks if necessary
