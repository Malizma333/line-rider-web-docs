## Description

Adjusts the index that the timeline ends at.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_MAX_INDEX", payload: maxIndex });
```

### Parameters

`maxIndex`

The max index for the timeline to render.

## Examples

Adjusts the max index to frame 80.

```js
store.dispatch({
  type: "SET_PLAYER_MAX_INDEX",
  payload: 80
});
```

## Related

- [set_player_index](./set_player_index.md)
- [set_player_settings](./set_player_settings.md)
- [set_player_stop_at_end](./set_player_stop_at_end.md)
