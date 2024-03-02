## Description

Adjusts the offset of the audio file.

### Syntax

```js
store.dispatch({ type: "SET_AUDIO_OFFSET", payload: offset });
```

### Parameters

`offset`

The time (in seconds) that audio starts playing from. Negative values correspond to time until audio starts playing.

## Examples

Adjusts the audio offset to play the song file two (2) seconds in.

```js
store.dispatch({
  type: "SET_AUDIO_OFFSET",
  payload: 2
});
```

## Related

- [remove_audio](./remove_audio.md)
- [set_audio_volume](./set_audio_volume.md)
- [toggle_audio](./toggle_audio.md)
