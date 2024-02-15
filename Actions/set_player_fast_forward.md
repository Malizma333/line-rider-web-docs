## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_FAST_FORWARD", payload: fastForward });
```

### Parameters

`fastForward`

Whether or not the player should play faster.

### Effects

Toggles the player to play faster.

## Examples

Turn off fast-forwarding.

```javascript
store.dispatch({
  type: "SET_PLAYER_FAST_FORWARD",
  payload: false
});
```

## Related

- [set_player_rewind](./set_player_rewind.md)
- [set_player_running](./set_player_running.md)
- [set_player_settings](./set_player_settings.md)
