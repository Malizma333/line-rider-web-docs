## Description

### Syntax

```javascript
store.dispatch({ type: "SET_PLAYBACK_ZOOM", payload: zoom });
```

### Parameters

`zoom`

Target zoom of the playback camera.

### Effects

Sets the zoom of the playback camera.

### Returns

None

## Examples

Set the playback camera's zoom to 4.

```javascript
store.dispatch({
  type: "SET_PLAYBACK_ZOOM",
  payload: 4
});
```

## Related

- [set_editor_camera](./set_editor_camera.md)
- [set_editor_follower_focus](./set_editor_follower_focus.md)
- [set_playback_dimensions](./set_playback_dimensions.md)
- [set_playback_follower_focus](./set_playback_follower_focus.md)
