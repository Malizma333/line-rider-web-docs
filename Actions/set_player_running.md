## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_RUNNING", payload: running });
```

### Parameters

`running`

Whether the player should be running.

### Effects

Sets the player to start or stop running.

## Examples

Stop the player.

```javascript
store.dispatch({
  type: "SET_PLAYER_RUNNING",
  payload: false
});
```

## Related

- [set_player_fast_forward](./set_player_fast_forward.md)
- [set_player_rewind](./set_player_rewind.md)
- [set_player_settings](./set_player_settings.md)
- [start_player](./start_player.md)
- [stop_player](./stop_player.md)
