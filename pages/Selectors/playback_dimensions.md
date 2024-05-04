---
layout: page
title: Playback Dimensions
parent: Selectors
permalink: /selectors/playback_dimensions/
---

## Playback Dimensions

Returns [`Dimensions`](/externals/camera/) describing the viewport of the playback camera.

### Syntax

```js
function getPlaybackDimensions(state) {
  return state.camera.playbackDimensions || state.camera.editorDimensions;
}
```

### Related

- [editor_dimensions](./editor_dimensions.md)
- [playback_follower_focus](./playback_follower_focus.md)
- [playback_zoom](./playback_zoom.md)
