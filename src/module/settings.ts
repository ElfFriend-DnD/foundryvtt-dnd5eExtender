import { MySettings, MODULE_ID, MODULE_ABBREV, TEMPLATES } from './constants';
import { log } from './helpers';
import { defineSkills } from './skillExtender';

export const registerSettings = function () {
  // debug use
  CONFIG[MODULE_ID] = { debug: true };
  CONFIG.debug.hooks = true;

  Dnd5eExtendersSettings.init();
};

/**
 * Goal:
 * Create a tabbed form where each tab has dynamically added
 * rows which can only be deleted if they were not already there.
 * The data is only saved on submit. And the form can only be submitted
 * if three checkboxes are checked. Checkboxes are not persisted,
 * error is shown if the user attempts to submit without the checkboxes
 * checked.
 */

export class Dnd5eExtendersSettings extends FormApplication {
  static init() {
    game.settings.registerMenu(MODULE_ID, 'menu', {
      name: 'D&D5e Extender Settings',
      label: 'Extender Settings',
      icon: 'fas fa-hammer',
      type: Dnd5eExtendersSettings,
      restricted: true,
    });

    game.settings.register(MODULE_ID, MySettings.customAbilities, {
      default: [
        {
          abbreviation: 'san',
          title: 'Sanity',
        },
      ],
      type: Object,
      config: false,
    });

    game.settings.register(MODULE_ID, MySettings.customSkills, {
      default: [],
      type: Object,
      config: false,
    });
  }

  static get defaultOptions() {
    return {
      ...super.defaultOptions,
      classes: ['dnd5e-extender-settings'],
      closeOnSubmit: false,
      height: 'auto',
      submitOnChange: false,
      submitOnClose: false,
      template: TEMPLATES.settings,
      title: 'D&D5e Extender Settings',
      tabs: [
        {
          navSelector: '.tabs',
          contentSelector: 'form',
          initial: 'warning',
        },
      ],
      width: 600,
    };
  }

  constructor(object = {}, options) {
    super(object, options);
  }

  getSettingsData() {
    const customAbilities = game.settings.get(MODULE_ID, MySettings.customAbilities);
    const customSkills = game.settings.get(MODULE_ID, MySettings.customSkills);

    log(false, 'getSettingsData', {
      customAbilities,
      customSkills,
    });

    const hydratedAbilities = customAbilities.map((ability) =>
      mergeObject(ability, { isEditable: CONFIG[MODULE_ID].debug })
    );

    const hydratedSkills = customSkills.map((skill) => mergeObject(skill, { isEditable: CONFIG[MODULE_ID].debug }));

    return {
      customSkills: hydratedSkills,
      customAbilities: hydratedAbilities,
      abilities: game.dnd5e.config.abilities,
    };
  }

  getData() {
    let data = super.getData();
    data.settings = this.getSettingsData();

    log(false, data);
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    log(false, 'activateListeners', {
      html,
    });

    const handleNewRowClick = async (currentTarget: JQuery<any>) => {
      log(false, 'add row clicked', {
        data: currentTarget.data(),
      });

      const table = currentTarget.data().table;

      const tableElement = currentTarget.siblings('table');
      const tbodyElement = $(tableElement).find('tbody');

      const newRowData = {
        index: tbodyElement.children().length,
        item: {
          abbreviation: '',
          isEditable: true,
          title: '',
        },
        abilities: game.dnd5e.config.abilities,
      };

      const newRow = $(await renderTemplate(TEMPLATES[table].tableRow, newRowData));
      // render a new row at the end of tbody
      tbodyElement.append(newRow);
    };

    const handleDeleteRowClick = (currentTarget: JQuery<any>) => {
      log(false, 'delete row clicked', {
        currentTarget,
      });

      currentTarget.parentsUntil('tbody').remove();
    };

    html.on('click', (e) => {
      const currentTarget = $(e.target).closest('button')[0];

      if (!currentTarget) {
        return;
      }

      const wrappedCurrentTarget = $(currentTarget);

      log(false, 'a button was clicked', { e, currentTarget });

      if (wrappedCurrentTarget.hasClass('add-row')) {
        handleNewRowClick(wrappedCurrentTarget);
      }
      if (wrappedCurrentTarget.hasClass('delete-row')) {
        handleDeleteRowClick(wrappedCurrentTarget);
      }
    });
  }

  async _updateObject(ev, formData) {
    const customAbilities = game.settings.get(MODULE_ID, MySettings.customAbilities);
    const customSkills = game.settings.get(MODULE_ID, MySettings.customSkills);
    const data = expandObject(formData);

    log(false, {
      formData,
      data,
    });

    // if any of our warnings are not checked, throw
    if (Object.values(data.warning).includes(false)) {
      const errorMessage = game.i18n.localize(`${MODULE_ABBREV}.AllWarnings`);

      ui.notifications.error(errorMessage);

      throw errorMessage;
    }

    const newCustomAbilities = mergeObject(customAbilities, Object.values(data.abilities || {}));
    const newCustomSkills = Object.values(data.skills || {});

    log(true, 'Warnings accepted, setting settings.', {
      abilities: newCustomAbilities,
      skills: newCustomSkills,
    });
    game.settings.set(MODULE_ID, MySettings.customAbilities, newCustomAbilities);
    game.settings.set(MODULE_ID, MySettings.customSkills, newCustomSkills);
  }
}
