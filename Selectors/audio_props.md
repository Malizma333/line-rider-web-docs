## Description

Returns data associated with the audio file.

```js
/**
* @typedef {{
*   enabled: boolean
*   name: ?string
*   offset: number
*   path: ?string
*   volume: number
* }} AudioData
*/
```

### Syntax

```js
store.getState().audio;
```

## Related

- [audio_enabled](./audio_enabled.md)
- [audio_file_loader](./audio_file_loader.md)
- [audio_file_loading](./audio_file_loading.md)
- [audio_offset](./audio_offset.md)
