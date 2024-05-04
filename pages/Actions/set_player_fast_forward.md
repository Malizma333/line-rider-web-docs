---
layout: page
title: Fast Forward
parent: Actions
permalink: /actions/set_player_fast_forward/
---

## Description

Toggles playing the playback faster than normal speed.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_FAST_FORWARD", payload: fastForward });
```

### Parameters

`fastForward`

A boolean indicating whether the player should play faster.

## Examples

Disables fast-forward mode.

```js
store.dispatch({
  type: "SET_PLAYER_FAST_FORWARD",
  payload: false
});
```

## Related

- [set_player_rewind](./set_player_rewind.md)
- [set_player_running](./set_player_running.md)
- [set_player_settings](./set_player_settings.md)
