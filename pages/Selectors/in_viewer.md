---
layout: page
title: Viewer Open
parent: Selectors
permalink: /selectors/in_viewer/
---

## Description

Returns a `boolean` indicating whether the track viewer is open.

### Syntax

```js
function getInViewer(state) {
  return state.views["Main"] === "viewer" || 
          state.views["Main"] === "editable-viewer";
}
```

## Related

- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [views](./views.md)
