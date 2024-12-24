---
title: Committed Riders
parent: Selectors
---

## Committed Riders

Returns [`Rider[]`]({{ site.baseurl }}{% link docs/external/rider.md %}) buffer describing the committed track riders.

### Syntax

```js
function getCommittedRiders(state) {
  return state.simulator.committedEngine.engine.state.riders;
}
```

### Related

- [riders](./riders.md)
- [simulator_committed_track](./simulator_committed_track.md)
