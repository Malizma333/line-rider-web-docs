---
layout: page
title: Track Is Dirty
parent: Selectors
permalink: /selectors/track_is_dirty/
---

## Description

Returns a `boolean` indicating whether the track has unsaved changes.

### Syntax

```js
function getTrackIsDirty(state) {
  return state.simulator.committedEngine !== state.simulator.lastSavedEngine;
}
```

## Related