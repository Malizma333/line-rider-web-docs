## Description

### Syntax

```javascript
store.dispatch({ type: "SET_ONION_SKIN_FRAMES_AFTER", payload: framesAfter });
```

### Parameters

`framesAfter`

Number of frames to render onion skinning after the current frame.

### Effects

Sets how many frames onion skinning renders after the current frame.

## Examples

Render 10 frames of onion skinning after the current frame.

```javascript
store.dispatch({
  type: "SET_ONION_SKIN_FRAMES_AFTER",
  payload: 10
});
```

## Related

- [set_onion_skin](./set_onion_skin.md)
- [set_onion_skin_frames_before](./set_onion_skin_frames_before.md)
- [set_view_option](./set_view_option.md)
