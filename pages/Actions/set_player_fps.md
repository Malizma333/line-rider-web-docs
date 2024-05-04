---
layout: page
title: Set Player FPS
parent: Actions
permalink: /actions/set_player_fps/
---

## Description

Adjusts the player fps rate.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_FPS", payload: fps });
```

### Parameters

`fps`

The frames per second to set playback to.

## Examples

Adjusts the playback rate to 24 fps.

```js
store.dispatch({
  type: "SET_PLAYER_FPS",
  payload: 24
});
```

## Related

- [set_interpolate](./set_interpolate.md)
- [set_player_settings](./set_player_settings.md)
