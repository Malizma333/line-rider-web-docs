---
layout: page
title: Line Count
parent: Selectors
---

## Line Count

Returns a `number` describing the total number of lines in the track.

### Syntax

```js
function getSimulatorTrackTotalLineCount(state) {
  return state.simulator.engine.linesList.size();
}
```

### Related
