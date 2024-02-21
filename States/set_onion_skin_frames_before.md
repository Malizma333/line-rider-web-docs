## Description

### Syntax

```javascript
store.dispatch({ type: "SET_ONION_SKIN_FRAMES_BEFORE", payload: framesBefore });
```

### Parameters

`framesBefore`

Number of frames to render onion skinning before the current frame.

### Effects

Sets how many frames onion skinning renders before the current frame.

## Examples

Render 5 frames of onion skinning before the current frame.

```javascript
store.dispatch({
  type: "SET_ONION_SKIN_FRAMES_BEFORE",
  payload: 5
});
```

## Related

- [set_onion_skin](./set_onion_skin.md)
- [set_onion_skin_frames_after](./set_onion_skin_frames_after.md)
- [set_view_option](./set_view_option.md)
