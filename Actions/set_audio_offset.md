## Description

### Syntax

```javascript
store.dispatch({ type: "SET_AUDIO_OFFSET", payload: offset });
```

### Parameters

`offset`

Time (in seconds) that audio starts playing from. Negative values correspond to time until audio starts playing.

### Effects

Sets the offset of the audio file.

### Returns

None

## Examples

Set the audio offset to play the song file 2 seconds in.

```javascript
store.dispatch({
  type: "SET_AUDIO_OFFSET",
  payload: 2
});
```

## Related

- [remove_audio](./remove_audio.md)
- [set_audio_volume](./set_audio_volume.md)
- [toggle_audio](./toggle_audio.md)
