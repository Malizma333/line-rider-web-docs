---
layout: page
title: Line Count
parent: Selectors
permalink: /selectors/simulator_track_total_line_count/
---

## Description

Returns a `number` describing the total number of lines in the track.

### Syntax

```js
function getSimulatorTrackTotalLineCount(state) {
  return state.simulator.engine.linesList.size();
}
```

## Related
