## Description

Returns a `boolean` indicating whether the export window is open.

### Syntax

```js
function getInVideoExporter(state) {
  return state.views["VIDEO_EXPORTER"] === "export";
}
```

## Related

- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_viewer](./in_viewer.md)
- [views](./views.md)
