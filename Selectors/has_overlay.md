## Description

Returns a nullable `string` indicating which window overlay is active.

### Syntax

```js
function getHasOverlay(state) {return (
  state.views["ABOUT"] ||
  state.views["TRACK_LOADER"] ||
  state.views["TRACK_SAVER"] ||
  state.views["VIDEO_EXPORTER"] ||
  state.views["RELEASE_NOTES"]
);}
```

## Related

- [controls_active](./controls_active.md)
- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [in_viewer](./in_viewer.md)
- [views](./views.md)
