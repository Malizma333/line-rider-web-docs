---
layout: page
title: Onion Skins Before
parent: Actions
---

## Onion Skins Before

Adjusts how many frames onion skinning renders before the current frame.

### Syntax

```js
store.dispatch({ type: "SET_ONION_SKIN_FRAMES_BEFORE", payload: framesBefore });
```

### Parameters

`framesBefore`

The number of frames to render onion skinning before the current frame.

### Examples

Renders 5 frames of onion skinning before the current frame.

```js
store.dispatch({
  type: "SET_ONION_SKIN_FRAMES_BEFORE",
  payload: 5
});
```

### Related

- [set_onion_skin](./set_onion_skin.md)
- [set_onion_skin_frames_after](./set_onion_skin_frames_after.md)
- [set_view_option](./set_view_option.md)
