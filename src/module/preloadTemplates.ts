export const preloadTemplates = async function () {
  const templatePaths = [
    // Add paths to "modules/foundryvtt-dnd5eExtender/templates"
  ];

  return loadTemplates(templatePaths);
};
