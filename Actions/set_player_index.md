## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYER_INDEX", payload: index });
```

### Parameters

`index`

Target index to skip to.

### Effects

Sets the current index of the timeline.

## Examples

Set the index to frame 80.

```javascript
store.dispatch({
  type: "SET_PLAYER_INDEX",
  payload: 80
});
```

## Related

- [dec_player_index](./dec_player_index.md)
- [inc_player_index](./inc_player_index.md)
- [set_flag_index](./set_flag_index.md)
- [set_player_max_index](./set_player_max_index.md)
- [set_player_settings](./set_player_settings.md)
