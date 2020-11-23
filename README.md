# D&D5e Extender

![Latest Release Download Count](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets%5B1%5D.download_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FElfFriend-DnD%2Ffoundryvtt-dnd5eExtender%2Freleases%2Flatest)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fdnd5e-extender&colorB=4aa94a)
![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2FElfFriend-DnD%2Ffoundryvtt-dnd5eExtender%2Fmain%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange)
[![ko-fi](https://img.shields.io/badge/-buy%20me%20a%20coke-%23FF5E5B)](https://ko-fi.com/elffriend)


This module allows a GM to define custom Ability Scores and Skills for the dnd5e system. The goal is to allow other alternative rulesets to be configured in this module eventually as well.

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
| **Name**                                                                                                       |       Skills       |   Ability Scores   | Notes                                                      |
| -------------------------------------------------------------------------------------------------------------- | :----------------: | :----------------: | ---------------------------------------------------------- |
| Default dnd5e system Character sheet                                                                           | :heavy_check_mark: | :heavy_check_mark: | Module customizations were needed.                         |
| [D&D 5e OGL Character Sheet v0.5.6](https://github.com/ElfFriend-DnD/foundryvtt-5eOGLCharacterSheet)           | :heavy_check_mark: | :heavy_check_mark: |                                                            |
| [Compact DnDBeyond 5e Character Sheet 0.9.4](https://github.com/ElfFriend-DnD/foundryvtt-compactBeyond5eSheet) | :heavy_check_mark: |        :x:         | Horizontal Ability Scores do not extend well               |
| [Tidy 5e Sheet v0.3.4](https://github.com/sdenec/tidy5e-sheet)                                                 | :heavy_check_mark: | :heavy_check_mark: |                                                            |
| [DNDBeyond Character Sheet for 5E](https://gitlab.com/riccisi/foundryvtt-magic-items)                          | :heavy_check_mark: | :heavy_check_mark: | Adding ability scores bleed off page right but it scrolls. |
| [Sky's Alternate D&D 5e Character Sheet](https://github.com/Sky-Captain-13/foundry/tree/master/alt5e)          | :heavy_check_mark: | :heavy_check_mark: |                                                            |

### NPC Sheet Support
| **Name**                                                                  |       Skills       |   Ability Scores   | Notes                                                    |
| ------------------------------------------------------------------------- | :----------------: | :----------------: | -------------------------------------------------------- |
| Default dnd5e system NPC sheet                                            | :heavy_check_mark: | :heavy_check_mark: | Module customizations were needed.                       |
| [Tidy 5e Sheet v0.3.4](https://github.com/sdenec/tidy5e-sheet)            | :heavy_check_mark: |        :x:         | Localization of Ability Scores Breaks Layout             |
| [Monster Blocks v0.9.1](https://github.com/syl3r86/BetterNPCSheet5e)      | :heavy_check_mark: | :heavy_check_mark: | Localization of Ability Scores Breaks, Layout not ideal. |
| [Better NPC Sheet 5e v0.9.1](https://github.com/syl3r86/BetterNPCSheet5e) | :heavy_check_mark: | :heavy_check_mark: | Might require resizing of the window.                    |


### Other Compatibilities

I'm honestly not sure how well this will play with modules that make assumptions about the 5e system, I'll try to test as many as possible but if something is obviously breaking please create and issue here and I'll see what I can do.

| **Name**                                                                                    |       Skills       |   Ability Scores   | Notes                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------- | :----------------: | :----------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [D&D Beyond Importer](https://github.com/mrprimate/ddb-importer)                            | :heavy_check_mark: | :heavy_check_mark: | Imports do not override custom skills or abilities.                                                                                                                                                                                                                                                 |
| [Better Rolls 5e v1.1.17](https://github.com/RedReign/FoundryVTT-BetterRolls5e)             | :heavy_check_mark: | :heavy_check_mark: | (Default Config) Items and Spells which roll based on a custom ability score seems to behave no differently.                                                                                                                                                                                        |
| [Midi-QOL v0.3.31](https://gitlab.com/tposney/midi-qol)                                     | :heavy_check_mark: | :heavy_check_mark: | (Default Config) Items and Spells which roll based on a custom ability score seems to behave no differently.                                                                                                                                                                                        |
| [FoundryVTT Magic Items v2.0.3](https://gitlab.com/riccisi/foundryvtt-magic-items)          | :heavy_check_mark: | :heavy_check_mark: | Does not seem to interact with Ability Scores or Skills.                                                                                                                                                                                                                                            |
| [Dynamic Active Effects v0.2.24](https://gitlab.com/tposney/dae)                            | :heavy_check_mark: | :heavy_check_mark: | (Tested with items modified from the [DAE SRD v3.0.2](https://github.com/kandashi/Dynamic-Effects-SRD) and while Magic Items was active) Custom Skills and Ability Scores do not show up as options in the Effect dropdowns, but inputting the correct abbreviation manually does work as expected. |
| [Skill Customization 5e v2.1.1](https://github.com/schultzcole/FVTT-Skill-Customization-5e) | :heavy_check_mark: | :heavy_check_mark: | Localization for custom Ability Scores breaks, but if you set a skill to use one it does behave as expected.                                                                                                                                                                                        |

## Known Issues

- DO NOT DISABLE THIS MODULE IF YOU HAVE CONFIGURED A CUSTOM SKILL OR ABILITY SCORE.
- The issues involving the character sheets above should be considered known issues. I am not inclined to fix these within this module as the fixes will quickly add more problems than solutions.
- Localization of Custom Ability Scores on certain NPC Sheets is broken. If there's enough issues opened about this I'll see if I can fix it.

## Acknowledgements

Bootstrapped with Nick East's [create-foundry-project](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project).

Mad props to the [League of Extraordinary FoundryVTT Developers](https://forums.forge-vtt.com/c/package-development/11) community which helped me figure out a lot.
