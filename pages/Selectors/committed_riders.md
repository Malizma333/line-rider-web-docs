---
layout: page
title: Committed Riders
parent: Selectors
permalink: /selectors/committed_riders/
---

## Committed Riders

Returns [`Rider[]`]({{ site.baseurl }}{% link pages/External/rider.md %}) buffer describing the committed track riders.

### Syntax

```js
function getCommittedRiders(state) {
  return state.simulator.committedEngine.engine.state.riders;
}
```

### Related

- [riders](./riders.md)
- [simulator_committed_track](./simulator_committed_track.md)
