## Description

Returns a `boolean` indicating whether the track viewer is open.

### Syntax

```js
function getInViewer(state) {
  return state.views["MAIN"] === "viewer" || 
          state.views["MAIN"] === "editable-viewer";
}
```

## Related

- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [views](./views.md)
