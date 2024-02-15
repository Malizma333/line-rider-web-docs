## Description

### Syntax

```javascript
store.dispatch({ type: "SET_FLAG_INDEX", payload: flagIndex });
```

### Parameters

`flagIndex`

Index in the timeline to set the flag to.

### Effects

Sets the flag to the target index in the timeline.

### Returns

None

## Examples

Set the flag index to the 40th frame.

```javascript
store.dispatch({
  type: "SET_FLAG_INDEX",
  payload: 40
});
```

## Related

- [set_flag](./set_flag.md)
- [set_player_index](./set_player_index.md)
