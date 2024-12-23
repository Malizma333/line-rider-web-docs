---
layout: page
title: Set Playback Focuser
parent: Actions
---

## Set Playback Focuser

Adjusts the playback camera to focus on zero or more riders based on weights.

### Syntax

```js
store.dispatch({ type: "SET_PLAYBACK_FOLLOWER_FOCUS", payload: focusList });
```

### Parameters

`focusList`

The weights of each rider on the playback camera movement.

### Examples

Adjusts the playback camera to focus between riders 1 and 3.

```js
store.dispatch({
  type: "SET_PLAYBACK_FOLLOWER_FOCUS",
  payload: [1, 0, 1]
});
```

### Related

- [set_editor_camera](./set_editor_camera.md)
- [set_editor_follower_focus](./set_editor_follower_focus.md)
- [set_playback_dimensions](./set_playback_dimensions.md)
- [set_playback_zoom](./set_playback_zoom.md)
