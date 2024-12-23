---
layout: page
title: Set Player Index
parent: Actions
---

## Set Player Index

Jumps to a specific frame in playback.

### Syntax

```js
store.dispatch({ type: "SET_PLAYER_INDEX", payload: index });
```

### Parameters

`index`

The target frame index to jump to.

### Examples

Jumps to frame 80.

```js
store.dispatch({
  type: "SET_PLAYER_INDEX",
  payload: 80
});
```

### Related

- [dec_player_index](./dec_player_index.md)
- [inc_player_index](./inc_player_index.md)
- [set_flag_index](./set_flag_index.md)
- [set_player_max_index](./set_player_max_index.md)
- [set_player_settings](./set_player_settings.md)
