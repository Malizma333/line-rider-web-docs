---
layout: page
title: Editor Open
parent: Selectors
permalink: /selectors/in_editor/
---

## Description

Returns a `boolean` indicating whether the editor view is open.

### Syntax

```js
function getInEditor(state) {
  return state.views["Main"] === "editor";
}
```

## Related

- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [in_viewer](./in_viewer.md)
- [views](./views.md)
