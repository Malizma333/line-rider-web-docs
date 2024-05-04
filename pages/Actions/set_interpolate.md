---
layout: page
title: Set Interpolate
parent: Actions
permalink: /actions/set_interpolate/
---

## Description

Switches the interpolation mode to a target fps or smoothing value.

### Syntax

```js
store.dispatch({ type: "SET_INTERPOLATE", payload: playbackMode });
```

### Parameters

`playbackMode`

The mode of interpolation. A `true` value represents smooth interpolation, while a `false` value represents physics/no interpolation. A numerical value represents fps interpolation.

## Examples

Switches the interpolation mode to 60 fps.

```js
store.dispatch({
  type: "SET_INTERPOLATE",
  payload: 60
});
```

## Related

- [set_player_settings](./set_player_settings.md)
- [toggle_interpolate](./toggle_interpolate.md)
