// Import TypeScript modules
import { registerSettings } from './module/settings';
import { preloadTemplates } from './module/preloadTemplates';
import { MODULE_ABBREV, MODULE_ID, MySettings } from './module/constants';
import { log } from './module/helpers';
import { libWrapper } from './module/libWrapperShim';
import { extendSkills } from './module/skillExtender';
import { extendAbilityScores } from './module/abilityScoreExtender';

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

  extendAbilityScores();
  extendSkills();

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
