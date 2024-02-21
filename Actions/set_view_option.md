## Description

### Syntax

```javascript
store.dispatch({ type: "SET_VIEW_OPTION", payload: { key: viewOption, value } });
```

### Parameters

`viewOption`

Name of the view option to toggle. Available view options can be found [here](../External/view_options.json).

`value`

Bool representing whether to turn on or off the target view option.

### Effects

Toggles a target view option.

## Examples

Turn on color playback.

```javascript
store.dispatch({
  type: "SET_VIEW_OPTION",
  payload: {key: "colorPlayback", value: true }
});
```

Show the viewport (as long as the camera dimensions are specified).

```javascript
store.dispatch({
  type: "SET_VIEW_OPTION",
  payload: {key: "showViewport", value: true }
});
```

## Related

- [set_skeleton](./set_skeleton.md)
