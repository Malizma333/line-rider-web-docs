---
layout: page
title: Set Flag Index
parent: Actions
permalink: /actions/set_flag_index/
---

## Set Flag Index

Moves the flag to the target index in the timeline.

### Syntax

```js
store.dispatch({ type: "SET_FLAG_INDEX", payload: flagIndex });
```

### Parameters

`flagIndex`

The frame to set the flag to.

### Examples

Moves the flag index to frame 40.

```js
store.dispatch({
  type: "SET_FLAG_INDEX",
  payload: 40
});
```

### Related

- [set_flag](./set_flag.md)
- [set_player_index](./set_player_index.md)
