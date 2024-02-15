## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_FPS", payload: fps });
```

### Parameters

`fps`

Frames per second to set playback to.

### Effects

Sets player fps rate.

### Returns

None

## Examples

Set the playback rate to 24 fps.

```javascript
store.dispatch({
  type: "SET_PLAYER_FPS",
  payload: 24
});
```

## Related

- [set_interpolate](./set_interpolate.md)
- [set_player_settings](./set_player_settings.md)
