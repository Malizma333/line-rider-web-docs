---
layout: page
title: Uncommitted Track
parent: Selectors
permalink: /selectors/simulator_track/
---

## Uncommitted Track

Returns an [`Engine`]({{ site.baseurl }}{% link pages/External/engine.md %}) describing the uncommitted track engine.

### Syntax

```js
function getSimulatorTrack(state) {
  return state.simulator.engine;
}
```

### Related

- [riders](./riders.md)
- [simulator_lines](./simulator_lines.md)
- [track_layers](./track_layers.md)
- [track_script](./track_script.md)
