// Import TypeScript modules
import { registerSettings } from './module/settings';
import { MODULE_ABBREV, MODULE_ID, MySettings, TEMPLATES } from './module/constants';
import { log } from './module/helpers';
import { libWrapper } from './module/libWrapperShim';
import { defineSkills, extendPrepareDataWithSkills } from './module/skillExtender';
import { defineAbilityScores, extendPrepareDataWithAbilities } from './module/abilityScoreExtender';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
  log(true, `Initializing ${MODULE_ID}`);

  // Set a class name on the body so our css overrides will take effect
  $('body').addClass('dnd5e-extender');

  // Register custom module settings
  await registerSettings();

  // define custom abilities
  defineAbilityScores();
  // define custom skills
  defineSkills();

  // add our custom abilities and skills to 5eActor data model
  libWrapper.register(
    MODULE_ID,
    'game.dnd5e.entities.Actor5e.prototype.prepareData',
    function (prepareData) {
      log(true, 'extendind data');
      extendPrepareDataWithAbilities.bind(this)();

      extendPrepareDataWithSkills.bind(this)();

      return prepareData();
    },
    'WRAPPER'
  );

  // Preload Handlebars templates
  await loadTemplates(Object.values(flattenObject(TEMPLATES)));

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
