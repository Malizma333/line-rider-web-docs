---
layout: page
title: Saver Progress
parent: Selectors
permalink: /selectors/track_saver_progress/
---

## Saver Progress

Returns [`Progress`]({{ site.baseurl }}{% link pages/external/files.md %}) describing the progress of the track saver.

### Syntax

```js
function getTrackSaverProgress(state) {
  return state.progress["SAVE_TRACK"];
}
```

### Related

- [autosave_progress](./autosave_progress.md)
- [track_loader_progress](./track_loader_progress.md)
- [track_saver_in_progress](./track_saver_in_progress.md)
