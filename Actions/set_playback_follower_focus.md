## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYBACK_FOLLOWER_FOCUS", payload: focusList });
```

### Parameters

`focusList`

Weights of each rider on the playback camera movement.

### Effects

Sets the camera to focus zero or more riders based on weights.

### Returns

None

## Examples

Set the playback to focus between the first and third riders.

```javascript
store.dispatch({
  type: "SET_PLAYBACK_FOLLOWER_FOCUS",
  payload: [1, 0, 1]
});
```

## Related

- [set_editor_camera](./set_editor_camera.md)
- [set_editor_follower_focus](./set_editor_follower_focus.md)
- [set_playback_dimensions](./set_playback_dimensions.md)
- [set_playback_zoom](./set_playback_zoom.md)
