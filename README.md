# D&D5e Extender

![Latest Release Download Count](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets%5B1%5D.download_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FElfFriend-DnD%2Ffoundryvtt-dnd5eExtender%2Freleases%2Flatest)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fdnd5e-extender&colorB=4aa94a)
![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2FElfFriend-DnD%2Ffoundryvtt-dnd5eExtender%2Fmain%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange)
[![ko-fi](https://img.shields.io/badge/-buy%20me%20a%20coke-%23FF5E5B)](https://ko-fi.com/elffriend)


This module allows a GM to define custom Ability Scores and Skills for the dnd5e system. The goal is to allow other alternative rulesets to be configured in this module as well.

## ⚠️⚠️⚠️ Warnings ⚠️⚠️⚠️

This can seriously wreck your game. If you're planning on running a game with alternative ability scores or skills, do not add and remove them repeatedly. This is intended to be a one-time set and forget modification. After you've added an ability score or skill, removing it will break all actors in the game and you will have to remake them all.

No, there's no migration scripts, no there's no recovery scripts. I don't even know if those are possible. You have been warned. I can not help you if you break your game with this module. Use it at your own EXTREME RISK.

## Installation

Module JSON:

```
https://github.com/ElfFriend-DnD/foundryvtt-dnd5eExtender/releases/latest/download/module.json
```

## Configuration

| **Name**       | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| **Debug Mode** | Remove all of the obstacles between you and ruining your world. |


## Compatibility

### Character Sheet Support
| **Name**                                                                                                 |  Works  | Notes |
| -------------------------------------------------------------------------------------------------------- | :-----: | ----- |
| [Compact DnDBeyond 5e Character Sheet](https://github.com/ElfFriend-DnD/foundryvtt-compactBeyond5eSheet) | :shrug: |       |
| [D&D 5e OGL Character Sheet](https://github.com/ElfFriend-DnD/foundryvtt-5eOGLCharacterSheet)            | :shrug: |       |
| [Tidy 5e Sheet](https://github.com/sdenec/tidy5e-sheet)                                                  | :shrug: |       |
| [DNDBeyond Character Sheet for 5E](https://gitlab.com/riccisi/foundryvtt-magic-items)                    | :shrug: |       |
| [Sky's Alternate D&D 5e Character Sheet](https://github.com/Sky-Captain-13/foundry/tree/master/alt5e)    | :shrug: |       |


### Other Compatibilities

I'm honestly not sure how well this will play with modules that make assumptions about the 5e system, I'll try to test as many as possible but if something is obviously breaking please create and issue here and I'll see what I can do.

| **Name**                                                                             |  Works  | Notes |
| ------------------------------------------------------------------------------------ | :-----: | ----- |
| [Better Rolls 5e](https://github.com/RedReign/FoundryVTT-BetterRolls5e)              | :shrug: |       |
| [Midi-QOL](https://gitlab.com/tposney/midi-qol)                                      | :shrug: |       |
| [Minor QOL](https://gitlab.com/tposney/minor-qol)                                    | :shrug: |       |
| [FoundryVTT Magic Items](https://gitlab.com/riccisi/foundryvtt-magic-items)          | :shrug: |       |
| [Dynamic Active Effects](https://gitlab.com/tposney/dae)                             | :shrug: |       |
| [Skill Customization 5e](https://github.com/schultzcole/FVTT-Skill-Customization-5e) | :shrug: |       |

## Known Issues

- I'm sure there are plenty, I have not tested this with ANY modules.

## Acknowledgements

Bootstrapped with Nick East's [create-foundry-project](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project).

Mad props to the [League of Extraordinary FoundryVTT Developers](https://forums.forge-vtt.com/c/package-development/11) community which helped me figure out a lot.
