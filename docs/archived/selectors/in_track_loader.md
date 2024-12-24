---
title: Track Loader Open
parent: Selectors
---

## Track Loader Open

Returns a `boolean` indicating whether the load window is open.

### Syntax

```js
function getInTrackLoader(state) {
  return state.views["TrackLoader"] === "load";
}
```

### Related

- [in_editor](./in_editor.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [in_viewer](./in_viewer.md)
- [views](./views.md)
