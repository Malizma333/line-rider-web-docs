---
layout: page
title: Cloud Saves Available
parent: Selectors
---

## Cloud Saves Available

Returns a `boolean` indicating whether track saves are available in cloud storage.

### Syntax

```js
function getSavedTracksAvailable(state) {
  return !!state.savedTracks;
}
```

### Related

- [saved_tracks](./saved_tracks.md)
