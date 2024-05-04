## Description

Applies position and zoom to the editor camera while in editor mode.

### Syntax

```js
store.dispatch({ type: "SET_EDITOR_CAMERA", payload: { position, zoom } });
```

### Parameters

`position`

The target position to move the editor camera to.

`zoom`

The target zoom to set the editor camera to.

## Examples

Moves the editor camera 20 pixels above the origin and applies a camera zoom of 3.

```js
store.dispatch({
  type: "SET_EDITOR_CAMERA",
  payload: { position: { x: 0, y: -20 }, zoom: 3 }
});
```

## Related

- [set_editor_follower_focus](./set_editor_follower_focus.md)
- [set_playback_dimensions](./set_playback_dimensions.md)
- [set_playback_follower_focus](./set_playback_follower_focus.md)
- [set_playback_zoom](./set_playback_zoom.md)
