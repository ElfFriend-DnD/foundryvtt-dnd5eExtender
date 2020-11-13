# Character Actions 5e

![Latest Release Download Count](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets%5B1%5D.download_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FElfFriend-DnD%2Ffoundryvtt-dnd5eCharacterActions%2Freleases%2Flatest)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fcharacter-actions-list-5e&colorB=4aa94a)
![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2FElfFriend-DnD%2Ffoundryvtt-dnd5eCharacterActions%2Fmain%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange)
[![ko-fi](https://img.shields.io/badge/-buy%20me%20a%20coke-%23FF5E5B)](https://ko-fi.com/elffriend)


Theoretically, this module provides a placable reusable "component" which details all of the actions a given Character Actor can take.

## Warnings

This can seriously fuck up your game. If you're planning on running a game with alternative ability scores or skills, do not add and remove them repeatedly. This is intended to be a one-time set and forget modification. After you've set an ability score, removing it carries some risks.


## Installation

Module JSON:

```
https://github.com/ElfFriend-DnD/foundryvtt-dnd5eCharacterActions/releases/latest/download/module.json
```

## Gallery


## Configuration

| **Name**                      | Description                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Limit Actions to Cantrips** | Path to the file that will be used for the Unexplored Fog. This image should be the same size as your background image or stretching will occur. |


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

| **Name**                                                                    |  Works  | Notes |
| --------------------------------------------------------------------------- | :-----: | ----- |
| [Better Rolls 5e](https://github.com/RedReign/FoundryVTT-BetterRolls5e)     | :shrug: |       |
| [Midi-QOL](https://gitlab.com/tposney/midi-qol)                             | :shrug: |       |
| [Minor QOL](https://gitlab.com/tposney/minor-qol)                           | :shrug: |       |
| [FoundryVTT Magic Items](https://gitlab.com/riccisi/foundryvtt-magic-items) | :shrug: |       |
| [D&D5e Dark Mode](https://github.com/Stryxin/dnd5edark-foundryvtt)          | :shrug: |       |
| [Inventory+](https://github.com/syl3r86/inventory-plus)                     | :shrug: |       |

## Known Issues

- Plenty

## Acknowledgements

Bootstrapped with Nick East's [create-foundry-project](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project).

Mad props to the [League of Extraordinary FoundryVTT Developers](https://forums.forge-vtt.com/c/package-development/11) community which helped me figure out a lot.
