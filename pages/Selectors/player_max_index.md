---
layout: page
title: Max Index
parent: Selectors
permalink: /selectors/player_max_index/
---

## Max Index

Returns a `number` describing the max index of the player.

### Syntax

```js
function getPlayerMaxIndex(state) {
  return Math.ceil(state.player.maxIndex);
}
```

### Related

- [player_flag_index](./player_flag_index.md)
- [player_index](./player_index.md)
