---
title: Stop At End
parent: Actions
---

## Stop At End

Toggles the player stopping at the end of the timeline.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_STOP_AT_END", payload: stopAtEnd });
```

### Parameters

`stopAtEnd`

A boolean indicating whether or not the player should stop at the end of the timeline.

### Examples

Enables stopping the player at the end of the timeline.

```js
store.dispatch({
  type: "SET_PLAYER_STOP_AT_END",
  payload: true
});
```

### Related

- [set_player_max_index](./set_player_max_index.md)
- [set_player_settings](./set_player_settings.md)
