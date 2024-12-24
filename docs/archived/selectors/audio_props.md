---
title: Audio Properties
parent: Selectors
---

## Audio Properties

Returns [`AudioData`]({{ site.baseurl }}{% link docs/external/audio.md %}) describing the currently loaded audio file.

### Syntax

```js
function getAudioProps(state) {
  return state.audio;
}
```

### Related

- [audio_enabled](./audio_enabled.md)
- [audio_file_loader](./audio_file_loader.md)
- [audio_file_loading](./audio_file_loading.md)
- [audio_offset](./audio_offset.md)
