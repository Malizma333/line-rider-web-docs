---
title: Track Saver Open
parent: Selectors
---

## Track Saver Open

Returns a `boolean` indicating whether the save window is open.

### Syntax

```js
function getInTrackSaver(state) {
  return state.views["TrackSaver"] === "save";
}
```

### Related

- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_video_exporter](./in_video_exporter.md)
- [in_viewer](./in_viewer.md)
- [views](./views.md)
