## Description

### Syntax

```javascript
store.dispatch({ type: "SET_AUDIO_VOLUME", payload: volume });
```

### Parameters

`volume`

Percentage value ranging from `0` - `1` that determines the volume of the audio file.

### Effects

Sets the volume of the audio file.

## Examples

Set the audio volume to half volume.

```javascript
store.dispatch({
  type: "SET_AUDIO_VOLUME",
  payload: 0.5
});
```

## Related

- [remove_audio](./remove_audio.md)
- [set_audio_offset](./set_audio_offset.md)
- [toggle_audio](./toggle_audio.md)
