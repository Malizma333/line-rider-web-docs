## Description

Returns [Dimensions](../External/templates.js) describing the viewport of the playback camera.

### Syntax

```js
function getPlaybackDimensions(state) {
  return state.camera.playbackDimensions || state.camera.editorDimensions;
}
```

## Related

- [editor_dimensions](./editor_dimensions.md)
- [playback_follower_focus](./playback_follower_focus.md)
- [playback_zoom](./playback_zoom.md)
