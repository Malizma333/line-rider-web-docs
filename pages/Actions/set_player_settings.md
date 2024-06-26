---
layout: page
title: Set Player Settings
parent: Actions
permalink: /actions/set_player_settings/
---

## Set Player Settings

Applies speed settings to the track player.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_SETTINGS", payload: settings });
```

### Parameters

`settings`

The [`PlayerSettings`]({{ site.baseurl }}{% link pages/External/player.md %}) describing parameters for the track player.

### Examples

Adjusts the base rate of the track player to 2 times speed.

```js
store.dispatch({
  type: "SET_PLAYER_SETTINGS",
  payload: { baseRate: 2 }
});
```

### Related

- [set_interpolate](./set_interpolate.md)
- [set_player_fast_forward](./set_player_fast_forward.md)
- [set_player_fps](./set_player_fps.md)
- [set_player_index](./set_player_index.md)
- [set_player_max_index](./set_player_max_index.md)
- [set_player_rewind](./set_player_rewind.md)
- [set_player_running](./set_player_running.md)
- [set_player_stop_at_end](./set_player_stop_at_end.md)
