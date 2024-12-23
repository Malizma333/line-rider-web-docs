---
layout: page
title: Set Playback Dimensions
parent: Actions
---

## Set Playback Dimensions

Applies viewport dimensions to playback camera.

### Syntax

```js
store.dispatch({ type: "SET_PLAYBACK_DIMENSIONS", payload: dimensions });
```

### Parameters

`dimensions`

The target viewport dimensions to set the playback camera to.

### Examples

Switches the viewport dimensions to high-definition (1080p) resolution.

```js
store.dispatch({
  type: "SET_PLAYBACK_DIMENSIONS",
  payload: { width: 1920, height: 1080 }
});
```

### Related

- [set_editor_camera](./set_editor_camera.md)
- [set_editor_follower_focus](./set_editor_follower_focus.md)
- [set_playback_follower_focus](./set_playback_follower_focus.md)
- [set_playback_zoom](./set_playback_zoom.md)
