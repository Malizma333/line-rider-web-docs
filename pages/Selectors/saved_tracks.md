---
layout: page
title: Cloud Saves
parent: Selectors
permalink: /selectors/saved_tracks/
---

## Cloud Saves

Returns a [`CloudSave[]`]({% link pages/External/files.md %}) that holds information of each track saved to the cloud.

### Syntax

```js
function getSavedTracks(state) {
  return state.savedTracks;
}
```

### Related

- [saved_tracks_available](./saved_tracks_available.md)
- [track_is_local_file](./track_is_local_file.md)
