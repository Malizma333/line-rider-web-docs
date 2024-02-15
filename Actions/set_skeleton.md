## Description

### Syntax

```javascript
store.dispatch({ type: "SET_SKELETON", payload: skeletonMode });
```

### Parameters

`skeletonMode`

Target skeleton visual to switch to. The available modes are normal view (0), skeleton view with sprites enabled (1), and skeleton view with sprites disabled (2).

### Effects

Toggles the advanced skeleton view, which shows the rider skeleton and gravity wells.

## Examples

Turn on skeleton view with sprites visible.

```javascript
store.dispatch({
  type: "SET_SKELETON",
  payload: 0
});
```

## Related

- [set_view_option](./set_view_option.md)
