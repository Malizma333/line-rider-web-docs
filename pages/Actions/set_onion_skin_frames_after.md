---
layout: page
title: Onion Skins After
parent: Actions
permalink: /actions/set_onion_skin_frames_after/
---

## Onion Skins After

Adjusts how many frames onion skinning renders after the current frame.

### Syntax

```js
store.dispatch({ type: "SET_ONION_SKIN_FRAMES_AFTER", payload: framesAfter });
```

### Parameters

`framesAfter`

The number of frames to render onion skinning after the current frame.

### Examples

Renders 10 frames of onion skinning after the current frame.

```js
store.dispatch({
  type: "SET_ONION_SKIN_FRAMES_AFTER",
  payload: 10
});
```

### Related

- [set_onion_skin](./set_onion_skin.md)
- [set_onion_skin_frames_before](./set_onion_skin_frames_before.md)
- [set_view_option](./set_view_option.md)
