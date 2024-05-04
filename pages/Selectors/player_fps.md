---
layout: page
title: Player FPS
parent: Selectors
permalink: /selectors/player_fps/
---

## Description

Returns a `number` describing the frames per second of the player.

### Syntax

```js
function getPlayerFps(state) {
  return state.player.settings.fps;
}
```

## Related

- [player_frame_rate_settings](./player_frame_rate_settings.md)
- [player_settings](./player_settings.md)
