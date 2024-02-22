## Description

Enables or disables onion skinning.

### Syntax

```javascript
store.dispatch({ type: "SET_ONION_SKIN", payload: onionSkin });
```

### Parameters

`onionSkin`

A boolean indicating whether the timeline should render onion skins.

## Examples

Enables onion skinning.

```javascript
store.dispatch({
  type: "SET_ONION_SKIN",
  payload: true
});
```

## Related

- [set_onion_skin_frames_after](./set_onion_skin_frames_after.md)
- [set_onion_skin_frames_before](./set_onion_skin_frames_before.md)
- [set_view_option](./set_view_option.md)
