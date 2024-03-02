## Description

Returns a `boolean` indicating whether the track saver is currently in progress.

### Syntax

```js
function getTrackSaverInProgress(state) {
  return state.progress["SAVE_TRACK"].percent != null;
}
```

## Related

- [track_saver_progress](./track_saver_progress.md)
