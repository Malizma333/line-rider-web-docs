---
layout: page
title: Audio Properties
parent: Selectors
permalink: /selectors/audio_props/
---

## Audio Properties

Returns [`AudioData`]({% link pages/External/audio.md %}) describing the currently loaded audio file.

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
