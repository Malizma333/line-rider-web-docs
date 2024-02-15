## Description

### Syntax

```javascript
store.dispatch({ type: "SET_ONION_SKIN", payload: onionSkin });
```

### Parameters

`onionSkin`

Whether or not to turn on onion skinning.

### Effects

Toggles onion skinning.

### Returns

None

## Examples

Turn on onion skinning.

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
