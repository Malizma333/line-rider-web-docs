---
layout: page
title: Committed Track
parent: Selectors
permalink: /selectors/simulator_committed_track/
---

## Committed Track

Returns an [`Engine`]({{ site.baseurl }}{% link pages/External/engine.md %}) describing the committed track engine.

### Syntax

```js
function getSimulatorCommittedTrack(state) {
  return state.simulator.committedEngine;
}
```

### Related

- [committed_track_layers](./committed_track_layers.md)
- [committed_riders](./committed_riders.md)
- [simulator_committed_lines](./simulator_committed_lines.md)
- [track_script](./track_script.md)
