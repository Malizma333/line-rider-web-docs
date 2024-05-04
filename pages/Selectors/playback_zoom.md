---
layout: page
title: Playback Zoom
parent: Selectors
permalink: /selectors/playback_zoom/
---

## Playback Zoom

Returns a `number` describing the current zoom of the playback camera.

### Syntax

```js
function getPlaybackZoom(state) {
  return window.getAutoZoom ?
    window.getAutoZoom(getPlayerIndex(state)) :
    state.camera.playbackZoom ;
}
```

### Related

- [editor_zoom](./editor_zoom.md)
- [playback_dimensions](./playback_dimensions.md)
- [playback_follower_focus](./playback_follower_focus.md)
