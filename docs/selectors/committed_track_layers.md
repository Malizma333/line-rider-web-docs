---
title: Committed Layers
parent: Selectors
---

## Committed Layers

Returns [`Layer[]`]({{ site.baseurl }}{% link docs/external/layer.md %}) buffer describing the committed track layers.

### Syntax

```js
function getCommittedTrackLayers(state) {
  return state.simulator.committedEngine.engine.state.layers;
}
```

### Related

- [simulator_committed_track](./simulator_committed_track.md)
- [track_active_layer_id](./track_active_layer_id.md)
- [track_layers](./track_layers.md)
