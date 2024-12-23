---
title: Uncommitted Lines
parent: Selectors
---

## Uncommitted Lines

Returns [`LineBase[]`]({{ site.baseurl }}{% link docs/external/line.md %}) buffer describing the uncommitted track lines.

### Syntax

```js
function getSimulatorLines(state) {
  return state.simulator.engine.linesList;
}
```

### Related

- [simulator_committed_lines](./simulator_committed_lines.md)
- [simulator_track](./simulator_track.md)
