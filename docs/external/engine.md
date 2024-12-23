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
List of line base objects that are used to compute track physics.

`layers: List.<Layer>`\
Properties about how the engine functions.

`lines: List.<Line>`\
Start properties for the rider.

`riders: List.<Rider>`\
State properties related to the editor.
