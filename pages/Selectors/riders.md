---
layout: page
title: Riders
parent: Selectors
permalink: /selectors/riders/
---

## Riders

Returns a [`Rider[]`](../External/rider.js) buffer describing the uncommitted track riders.

### Syntax

```js
function getRiders(state) {
  return state.simulator.engine.engine.state.riders;
}
```

### Related

- [committed_riders](./committed_riders.md)
- [simulator_track](./simulator_track.md)
