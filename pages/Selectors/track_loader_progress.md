---
layout: page
title: Loader Progress
parent: Selectors
permalink: /selectors/track_loader_progress/
---

## Loader Progress

Returns [`Progress`]({% link pages/External/files.md %}) describing the progress of the track loader.

### Syntax

```js
function getTrackLoaderProgress(state) {
  return state.progress["LOAD_TRACK"];
}
```

### Related

- [autosave_progress](./autosave_progress.md)
- [track_saver_progress](./track_saver_progress.md)
