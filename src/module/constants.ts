export const MODULE_ID = 'dnd5e-extender';
export const MODULE_ABBREV = 'EXT5E';

export const TEMPLATES = {
  settings: `modules/${MODULE_ID}/templates/settings.hbs`,
  settingsAbilities: `modules/${MODULE_ID}/templates/settings-abilities.hbs`,
};

export enum MySettings {
  customAbilities = 'custom-abilities',
  customSkills = 'custom-skills',
}

export enum MyFlags {}
