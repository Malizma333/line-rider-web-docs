---
title: Playback Focuser
parent: Selectors
---

## Playback Focuser

Returns a `number` describing which rider is being followed by the playback camera.

### Syntax

```js
function getPlaybackCameraFocus(state) {
  return state.camera.playbackFollower.focus;
}
```

### Related

- [editor_follower_focus](./editor_follower_focus.md)
- [playback_dimensions](./playback_dimensions.md)
- [playback_zoom](./playback_zoom.md)
- [use_editor_follower](./use_editor_follower.md)
