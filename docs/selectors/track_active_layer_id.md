---
title: Active Layer Id
parent: Selectors
---

## Active Layer Id

Returns a `number` describing the currently active layer id.

### Syntax

```js
function getTrackActiveLayerId(state) {
  return state.simulator.engine.engine.state.activeLayerId;
}
```

### Related

- [committed_track_layers](./committed_track_layers.md)
- [track_layers](./track_layers.md)
