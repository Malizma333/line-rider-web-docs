## Description

Adjusts the volume of the audio file.

### Syntax

```javascript
store.dispatch({ type: "SET_AUDIO_VOLUME", payload: volume });
```

### Parameters

`volume`

The percentage value ranging from `0` - `1` that determines the volume of the audio file.

## Examples

Adjusts the audio volume to half of max volume.

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
