---
layout: page
title: Onion Skin Start
parent: Selectors
permalink: /selectors/onion_begin_index/
---

## Onion Skin Start

Returns a `number` describing the start frame of onion skinning.

### Syntax

```js
function getOnionBeginIndex(state) {
  return Math.max(
    0, Math.ceil(state.player.index) - state.renderer.onionSkinFramesBefore
  );
}
```

### Related

- [onion_end_index](./onion_end_index.md)
- [onion_skin_active](./onion_skin_active.md)
