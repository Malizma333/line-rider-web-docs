## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_SETTINGS", payload: settings });
```

### Parameters

`settings`

Settings object describing parameters for the player. The format of the player settings object can be found [here](../External/player_settings_template.js).

### Effects

Applies settings to the player.

### Returns

None

## Examples

Set the base rate of the player to 2 times speed.

```javascript
store.dispatch({
  type: "SET_PLAYER_SETTINGS",
  payload: { baseRate: 2 }
});
```

## Related

- [set_interpolate](./set_interpolate.md)
- [set_player_fast_forward](./set_player_fast_forward.md)
- [set_player_fps](./set_player_fps.md)
- [set_player_index](./set_player_index.md)
- [set_player_max_index](./set_player_max_index.md)
- [set_player_rewind](./set_player_rewind.md)
- [set_player_running](./set_player_running.md)
- [set_player_stop_at_end](./set_player_stop_at_end.md)
