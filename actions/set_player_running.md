---
layout: page
title: Toggle Player
parent: Actions
---

## Toggle Player

Stops or starts running playback.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_RUNNING", payload: running });
```

### Parameters

`running`

A boolean indicating whether the player should be running.

### Examples

Stops playback.

```js
store.dispatch({
  type: "SET_PLAYER_RUNNING",
  payload: false
});
```

### Related

- [set_player_fast_forward](./set_player_fast_forward.md)
- [set_player_rewind](./set_player_rewind.md)
- [set_player_settings](./set_player_settings.md)
- [start_player](./start_player.md)
- [stop_player](./stop_player.md)
