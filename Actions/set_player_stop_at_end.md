## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_STOP_AT_END", payload: stopAtEnd });
```

### Parameters

`stopAtEnd`

Whether or not the player stops at the end of the timeline.

### Effects

Toggles the player to stop at the end of the timeline.

### Returns

None

## Examples

Set the timeline to stop at the end.

```javascript
store.dispatch({
  type: "SET_PLAYER_STOP_AT_END",
  payload: true
});
```

## Related

- [set_player_max_index](./set_player_max_index.md)
- [set_player_settings](./set_player_settings.md)
