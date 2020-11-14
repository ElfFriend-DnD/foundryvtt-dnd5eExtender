export const MODULE_ID = 'dnd5e-extender';
export const MODULE_ABBREV = 'EXT5E';

export const TEMPLATES = {
  settings: `modules/${MODULE_ID}/templates/settings.hbs`,
  settingSubmit: `modules/${MODULE_ID}/templates/settings-submit.hbs`,
  abilities: {
    table: `modules/${MODULE_ID}/templates/abilities/settings-abilities.hbs`,
    tableRow: `modules/${MODULE_ID}/templates/abilities/settings-abilities-tr.hbs`,
  },
  skills: {
    table: `modules/${MODULE_ID}/templates/skills/settings-skills.hbs`,
    tableRow: `modules/${MODULE_ID}/templates/skills/settings-skills-tr.hbs`,
  },
};

export enum MySettings {
  customAbilities = 'custom-abilities',
  customSkills = 'custom-skills',
  debugMode = 'debug-mode',
}

export enum MyFlags {}
