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

    const hydratedAbilities = customAbilities.map((ability) => mergeObject(ability, { isEditable: false }));

    return {
      skills: customSkills,
      abilities: hydratedAbilities,
    };
  }

  getData() {
    let data = super.getData();
    data.settings = this.getSettingsData();
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    $('.add-row').on('click', async (e) => {
      log(false, 'add row clicked', {
        table: e.currentTarget.dataset.table,
        e,
      });

      const table = e.currentTarget.dataset.table;

      const tableElement = e.currentTarget.previousElementSibling;
      const tbodyElement = $(tableElement).find('tbody');

      const newRowData = {
        index: tbodyElement.children().length,
        item: {
          abbreviation: '',
          isEditable: true,
          title: '',
        },
      };

      const newRow = $(await renderTemplate(TEMPLATES.settingsAbilitiesTr, newRowData));
      // render a new row at the end of tbody
      tbodyElement.append(newRow);
    });

    $('.delete-row').on('click', (e) => {
      log(false, 'delete row clicked', {
        table: e.currentTarget.dataset.table,
        e,
      });

      const target = e.currentTarget;
      $(target).parentsUntil('tbody').remove();
    });
  }

  async _updateObject(ev, formData) {
    const customAbilities = game.settings.get(MODULE_ID, MySettings.customAbilities);
    const data = expandObject(formData);

    log(false, {
      formData,
      data,
    });

    const newCustomAbilities = mergeObject(customAbilities, Object.values(data.abilities));

    // if any of our warnings are not checked, throw
    if (Object.values(data.warning).includes(false)) {
      const errorMessage = game.i18n.localize(`${MODULE_ABBREV}.AllWarnings`);

      ui.notifications.error(errorMessage);

      throw errorMessage;
    }

    const newAbilities = Object.values(data.abilities);

    log(true, 'Warnings accepted, setting settings.', {
      abilities: newCustomAbilities,
      skills: data.skills,
    });
    game.settings.set(MODULE_ID, MySettings.customSkills, data.skills);
    game.settings.set(MODULE_ID, MySettings.customAbilities, newCustomAbilities);
  }

  // get the table associated to a button (same disposition, same dType)
  // private _getAssociatedTable($button: any, $context: any): any {
  //   const disposition = $button.attr('disposition');
  //   const dType = $button.attr('dType');
  //   const $table = $context.find(`.${Utils.moduleName}-table[disposition=${disposition}][dType=${dType}]`);
  //   return { disposition, dType, $table };
  // }

  // // the add button click event, adds a new line on the associated table
  // private async _addButtonClickEvent(ev: any): Promise<void> {
  //   // because we take the button from ev.target, we need to make sure it's actually the button
  //   // and not the span or icon
  //   const $button = $(ev.target).closest('button');

  //   const $context = $button?.parent()?.parent(); // the parent form
  //   if (!$context.length) return;

  //   const { disposition, dType, $table } = this._getAssociatedTable($button, $context);
  //   const $tbody = $table.find('tbody');
  //   const $rows = $tbody.find(`.${Utils.moduleName}-row`);
  //   const lastIndex = $rows.length ? parseInt($rows.last().attr('index')) || 0 : 0;

  //   const data = {
  //     moduleName: Utils.moduleName,
  //     index: lastIndex + 1,
  //     disposition,
  //     type: dType,
  //     item: {
  //       color: Utils.randomColorPicker(),
  //     },
  //   };

  //   const $newRow = $(await renderTemplate(CONSTANTS.TEMPLATES.TOOLTIP_EDITOR_TABLE_ROW, data));
  //   $tbody.append($newRow);

  //   // Make this... not shit... maybe...
  //   // Future me here... this is not what I was talking about... but It's future future me problem now...
  //   // Future future me... I ended up just copy pasting this from the old settings
  //   $newRow.find(`.${Utils.moduleName}-row_button.delete`).on('click', () => {
  //     $tbody.find(`.${Utils.moduleName}-row[index=${lastIndex + 1}]`).remove();
  //   });
  // }
}
