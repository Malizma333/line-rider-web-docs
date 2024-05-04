---
layout: page
title: Physics Version
parent: Selectors
permalink: /selectors/simulator_version/
---

## Physics Version

Returns a version string `6.1 | 6.2` indicating which physics version the track uses.

### Syntax

```js
function getSimulatorVersion(state) {
  return state.simulator.engine.isLegacy() ? "6.1" : "6.2";
}
```

### Related
