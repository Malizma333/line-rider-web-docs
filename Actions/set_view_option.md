## Description

Toggles a target view option.

### Syntax

```js
store.dispatch({ type: "SET_VIEW_OPTION", payload: { key: viewOption, value } });
```

### Parameters

`viewOption`

The name of the view option to toggle. Available view options can be found [here](../External/view_options.json).

`value`

A boolean indicating whether to enable the target view option.

## Examples

Enables color playback.

```js
store.dispatch({
  type: "SET_VIEW_OPTION",
  payload: {key: "colorPlayback", value: true }
});
```

Shows the viewport (as long as the camera dimensions are specified).

```js
store.dispatch({
  type: "SET_VIEW_OPTION",
  payload: {key: "showViewport", value: true }
});
```

## Related

- [set_skeleton](./set_skeleton.md)
