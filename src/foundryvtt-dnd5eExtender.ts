import { registerSettings } from './module/settings';
import { MODULE_ID, TEMPLATES } from './module/constants';
import { log } from './module/helpers';
import { libWrapper } from './module/libWrapperShim';
import { defineSkills, extendPrepareDataWithSkills } from './module/skillExtender';
import { defineAbilityScores, extendPrepareDataWithAbilities } from './module/abilityScoreExtender';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
  console.log(MODULE_ID, '|', `Initializing ${MODULE_ID}`);

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
      log(true, 'Extending dnd5e Data Model');

      try {
        extendPrepareDataWithAbilities.bind(this)();
      } catch (e) {
        ui.notifications.error('There was an error setting up your Custom Ability Scores, check the console.');
        console.error(e);
      }

      try {
        extendPrepareDataWithSkills.bind(this)();
      } catch (e) {
        ui.notifications.error('There was an error setting up your Custom Skills, check the console.');
        console.error(e);
      }

      return prepareData();
    },
    'WRAPPER'
  );

  // Load Handlebars templates last as it is comparatively expensive and
  // we need to beat dnd5e starting to set up
  await loadTemplates(Object.values(flattenObject(TEMPLATES)));

  Hooks.call(`DND5eExtendedReady`);
});
