## Description

### Syntax

```javascript
const setPlaybackDimensions = (dimensions) => ({ type: "SET_PLAYBACK_DIMENSIONS", payload: dimensions });
```

### Parameters

`dimensions`

Target viewport dimensions to set playback camera to.

### Effects

Applies viewport dimensions to playback camera.

### Returns

None

## Examples

Set viewport dimensions to 1080p resolution.

```javascript
const setPlaybackDimensions = (dimensions) => ({
  type: "SET_PLAYBACK_DIMENSIONS",
  payload: { width: 1920, height: 1080 }
});
```

## Related

- [set_editor_camera](./set_editor_camera.md)
- [set_editor_follower_focus](./set_editor_follower_focus.md)
- [set_playback_follower_focus](./set_playback_follower_focus.md)
- [set_playback_zoom](./set_playback_zoom.md)
