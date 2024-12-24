---
title: Player Settings
parent: Selectors
---

## Player Settings

Returns [`PlayerSettings`]({{ site.baseurl }}{% link docs/external/player.md %}) describing playback settings.

### Syntax

```js
function getPlayerSettings(state) {
  return state.player.settings;
}
```

### Related

- [player_flag_index](./player_flag_index.md)
- [player_fps](./player_fps.md)
- [player_frame_rate_settings](./player_frame_rate_settings.md)
- [player_max_index](./player_max_index.md)
