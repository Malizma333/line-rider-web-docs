---
layout: page
title: Committed Lines
parent: Selectors
permalink: /selectors/simulator_committed_lines/
---

## Committed Lines

Returns [`LineBase[]`]({{ site.baseurl }}{% link pages/External/line.md %}) buffer describing the committed track lines.

### Syntax

```js
function getSimulatorCommittedLines(state) {
  return state.simulator.committedEngine.linesList;
}
```

### Related

- [simulator_lines](./simulator_lines.md)
- [simulator_committed_track](./simulator_committed_track.md)
