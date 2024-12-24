---
title: Engine
parent: Externals
---

## Engine

Stores computed information about the physics engine state.

### Properties

`_changeCount: number`\
Number of changes in the engine from the initial load state.

`_computed?: Object`\
Object storing computed physics information.

`_locked: boolean`\
Whether or not the engine is in a locked state.

`_target?: Object`\
The next target for the engine.

`linesList: List.<LineBase>`\
List of line base objects that are used to compute track physics.

`props: Object`\
Properties about how the engine functions.

`start: { position: V2, velocity: V2 }`\
Start properties for the rider.

`state: EngineState`\
State properties related to the editor.

## Engine State

Current state of the engine.

### Properties

`activeLayerId: number`\
Id of the active layer, on which lines are drawn.

`layers: List.<Layer>`\
List of track layers.

`lines: List.<Line>`\
List of base track lines.

`riders: List.<Rider>`\
List of initial track riders.
