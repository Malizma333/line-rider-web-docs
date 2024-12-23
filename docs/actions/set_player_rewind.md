---
title: Rewind
parent: Actions
---

## Rewind

Toggles playing the playback in reverse.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_REWIND", payload: rewind });
```

### Parameters

`rewind`

A boolean indicating whether or not the player should play in reverse.

### Examples

Enables rewind mode.

```js
store.dispatch({
  type: "SET_PLAYER_REWIND",
  payload: true
});
```

### Related

- [set_player_fast_forward](./set_player_fast_forward.md)
- [set_player_running](./set_player_running.md)
- [set_player_settings](./set_player_settings.md)
