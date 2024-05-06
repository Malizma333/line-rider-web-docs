---
layout: page
title: Player Settings
parent: Selectors
permalink: /selectors/player_settings/
---

## Player Settings

Returns [`PlayerSettings`]({% link pages/External/player.md %}) describing playback settings.

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
