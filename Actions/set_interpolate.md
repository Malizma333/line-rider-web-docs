## Description

### Syntax

```javascript
store.dispatch({ type: "SET_INTERPOLATE", payload: playbackMode });
```

### Parameters

`playbackMode`

Mode of interpolating. A `true` value represents smooth interpolation, while a `false` value represents physics (no) interpolation. A numerical value represents fps interpolation.

### Effects

Toggles interpolation based on input interpolation.

### Returns

None

## Examples

Set interpolation mode to 60 fps.

```javascript
store.dispatch({
  type: "SET_INTERPOLATE",
  payload: 60
});
```

## Related

- [set_player_settings](./set_player_settings.md)
- [toggle_interpolate](./toggle_interpolate.md)
