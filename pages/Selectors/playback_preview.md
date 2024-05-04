---
layout: page
title: Playback Preview
parent: Selectors
permalink: /selectors/playback_preview/
---

## Playback Preview

Returns a `boolean` indicating whether playback preview is enabled.

### Syntax

```js
function getPlaybackPreview(state) {
  return state.renderer.playbackPreview;
}
```

### Related

- [color_playback](./color_playback.md)
- [player_settings](./player_settings.md)
- [track_lines_locked](./track_lines_locked.md)
