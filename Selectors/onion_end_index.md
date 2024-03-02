## Description

Returns a `number` describing the end frame of onion skinning.

### Syntax

```js
function getOnionEndIndex(state) {
  return Math.min(
    state.player.maxIndex, Math.max(
      0, Math.floor(state.player.index) + state.renderer.onionSkinFramesAfter
    )
  );
}
```

## Related

- [onion_begin_index](./onion_begin_index.md)
- [onion_skin_active](./onion_skin_active.md)
