## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_REWIND", payload: rewind });
```

### Parameters

`rewind`

Whether or not the player should rewind.

### Effects

Toggles the player to rewind.

### Returns

None

## Examples

Turn on rewind.

```javascript
store.dispatch({
  type: "SET_PLAYER_REWIND",
  payload: true
});
```

## Related

- [set_player_fast_forward](./set_player_fast_forward.md)
- [set_player_running](./set_player_running.md)
- [set_player_settings](./set_player_settings.md)
