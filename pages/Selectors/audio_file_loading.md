---
layout: page
title: Audio Loading
parent: Selectors
permalink: /selectors/audio_file_loading/
---

## Description

Returns a `boolean` indicating whether the audio file is loading.

### Syntax

```js
function getAudioFileLoading(state) {
  return state.audioFileLoader.loadingFile;
}
```

## Related

- [audio_enabled](./audio_enabled.md)
- [audio_file_loader](./audio_file_loader.md)
- [audio_offset](./audio_offset.md)
- [audio_props](./audio_props.md)
