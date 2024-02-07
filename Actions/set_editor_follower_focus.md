## Description

### Syntax

```javascript
store.dispatch({ type: "SET_EDITOR_FOLLOWER_FOCUS", payload: focusIndex });
```

### Parameters

`focusIndex`

Target rider to focus on.

### Effects

Sets the rider that the editor camera should focus on.

### Returns

None

## Examples

Set the editor camera focus to the second rider.

```javascript
store.dispatch({
  type: "SET_EDITOR_FOLLOWER_FOCUS",
  payload: 1
});
```

## Related

- [set_editor_camera](./set_editor_camera.md)
- [set_playback_dimensions](./set_playback_dimensions.md)
- [set_playback_follower_focus](./set_playback_follower_focus.md)
- [set_playback_zoom](./set_playback_zoom.md)
