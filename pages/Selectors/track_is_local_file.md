---
layout: page
title: Track Is Local
parent: Selectors
permalink: /selectors/track_is_local_file/
---

## Track Is Local

Returns a `boolean` indicating whether the track originated from a local file save.

### Syntax

```js
function getTrackIsLocalFile(state) {
  return state.trackData.localFile;
}
```

### Related

- [autosave_enabled](./autosave_enabled.md)
- [saved_tracks](./saved_tracks.md)
