---
layout: page
title: Committed Layers
parent: Selectors
permalink: /selectors/committed_track_layers/
---

## Committed Layers

Returns [`Layer[]`]({% link pages/External/layer.md %}) buffer describing the committed track layers.

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
