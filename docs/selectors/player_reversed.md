---
title: Player Reversed
parent: Selectors
---

## Player Reversed

Returns a `boolean` indicating whether the player is playing in reverse.

### Syntax

```js
function getPlayerReversed(state) {
  return (state.player.reverse || state.player.rewind) && !state.player.fastForward;
}
```

### Related

- [player_running](./player_running.md)
- [player_slow_motion](./player_slow_motion.md)
