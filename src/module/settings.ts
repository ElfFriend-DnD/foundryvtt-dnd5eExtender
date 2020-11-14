import { MySettings, MODULE_ID, MODULE_ABBREV, TEMPLATES } from './constants';
import { log } from './helpers';
import { defineSkills } from './skillExtender';

export const registerSettings = function () {
  // debug use
  CONFIG[MODULE_ID] = { debug: true };
  CONFIG.debug.hooks = true;

  Dnd5eExtendersSettings.init();
};

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
      default: [],
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
      template: TEMPLATES.settings,
      height: 'auto',
      title: 'D&D5e Extender Settings',
      width: 600,
      tabs: [
        {
          navSelector: '.tabs',
          contentSelector: 'form',
          initial: 'warning',
        },
      ],
      submitOnChange: false,
      closeOnSubmit: false,
      submitOnClose: false,
    };
  }

  constructor(object = {}, options) {
    super(object, options);
  }

  getSettingsData() {
    const definedAbilities = game.settings.get(MODULE_ID, MySettings.customAbilities);
    const definedSkills = game.settings.get(MODULE_ID, MySettings.customSkills);

    return {
      skills: definedSkills,
      abilities: definedAbilities,
    };
  }

  getData() {
    let data = super.getData();
    data.settings = this.getSettingsData();
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    $('.add-row').on('click', (e) => {
      const table = e.target.dataset.table;
      // render a new row at the end of tbody
    });
  }

  async _updateObject(ev, formData) {
    const data = expandObject(formData);

    log(false, {
      formData,
      data,
    });

    game.settings.set(MODULE_ID, MySettings.customSkills, data.skills);
    game.settings.set(MODULE_ID, MySettings.customAbilities, data.abilities);
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
