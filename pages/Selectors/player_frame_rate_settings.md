## Description

Returns a `boolean` indicating whether smooth playback is on.

### Syntax

```js
function getPlayerFrameRateSetting(state) {
  return state.renderer.skeleton === 0 ?
    state.player.settings.interpolate :
    false ;
}
```

## Related

- [player_fps](./player_fps.md)
- [player_settings](./player_settings.md)
