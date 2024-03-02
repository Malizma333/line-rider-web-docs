## Description

Returns [Dimensions](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L80-L85) describing the viewport of the playback camera.

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
