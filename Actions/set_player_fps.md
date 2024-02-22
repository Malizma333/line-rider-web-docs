## Description

Adjusts the player fps rate.

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_FPS", payload: fps });
```

### Parameters

`fps`

The frames per second to set playback to.

## Examples

Adjusts the playback rate to twenty-four (24) fps.

```javascript
store.dispatch({
  type: "SET_PLAYER_FPS",
  payload: 24
});
```

## Related

- [set_interpolate](./set_interpolate.md)
- [set_player_settings](./set_player_settings.md)
