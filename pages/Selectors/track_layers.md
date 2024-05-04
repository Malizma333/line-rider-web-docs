---
layout: page
title: Uncommitted Layers
parent: Selectors
permalink: /selectors/track_layers/
---

## Description

Returns [`Layer[]`](../External/layer.js) buffer describing the uncommitted track layers.

### Syntax

```js
function getTrackLayers(state) {
  return state.simulator.engine.engine.state.layers;
}
```

## Related

- [committed_track_layers](./committed_track_layers.md)
- [simulator_track](./simulator_track.md)
- [track_active_layer_id](./track_active_layer_id.md)
