---
layout: page
title: Set Editor Focuser
parent: Actions
---

## Set Editor Focuser

Switches the rider that the editor camera should focus on.

### Syntax

```js
store.dispatch({ type: "SET_EDITOR_FOLLOWER_FOCUS", payload: focusIndex });
```

### Parameters

`focusIndex`

The target rider to focus on.

### Examples

Switches the editor camera focus to rider two (2).

```js
store.dispatch({
  type: "SET_EDITOR_FOLLOWER_FOCUS",
  payload: 1
});
```

### Related

- [set_editor_camera](./set_editor_camera.md)
- [set_playback_dimensions](./set_playback_dimensions.md)
- [set_playback_follower_focus](./set_playback_follower_focus.md)
- [set_playback_zoom](./set_playback_zoom.md)
