---
title: Track Is Dirty
parent: Selectors
---

## Track Is Dirty

Returns a `boolean` indicating whether the track has unsaved changes.

### Syntax

```js
function getTrackIsDirty(state) {
  return state.simulator.committedEngine !== state.simulator.lastSavedEngine;
}
```

### Related
