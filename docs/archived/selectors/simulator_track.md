---
title: Uncommitted Track
parent: Selectors
---

## Uncommitted Track

Returns an [`Engine`]({{ site.baseurl }}{% link docs/external/engine.md %}) describing the uncommitted track engine.

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
