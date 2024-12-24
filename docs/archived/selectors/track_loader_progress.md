---
title: Loader Progress
parent: Selectors
---

## Loader Progress

Returns [`Progress`]({{ site.baseurl }}{% link docs/external/storage.md %}) describing the progress of the track loader.

### Syntax

```js
function getTrackLoaderProgress(state) {
  return state.progress["LOAD_TRACK"];
}
```

### Related

- [autosave_progress](./autosave_progress.md)
- [track_saver_progress](./track_saver_progress.md)
