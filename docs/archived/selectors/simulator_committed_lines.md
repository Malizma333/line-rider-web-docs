---
title: Committed Lines
parent: Selectors
---

## Committed Lines

Returns [`LineBase[]`]({{ site.baseurl }}{% link docs/external/line.md %}) buffer describing the committed track lines.

### Syntax

```js
function getSimulatorCommittedLines(state) {
  return state.simulator.committedEngine.linesList;
}
```

### Related

- [simulator_lines](./simulator_lines.md)
- [simulator_committed_track](./simulator_committed_track.md)
