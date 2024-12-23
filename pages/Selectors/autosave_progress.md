---
layout: page
title: Autosave Progress
parent: Selectors
permalink: /selectors/autosave_progress/
---

## Autosave Progress

Returns [`Progress`]({{ site.baseurl }}{% link pages/external/files.md %}) describing the progress of the autosaver.

### Syntax

```js
function getAutosaveProgress(state) {
  return state.progress["AUTOSAVE"];
}
```

### Related

- [track_loader_progress](./track_loader_progress.md)
- [track_saver_progress](./track_saver_progress.md)
