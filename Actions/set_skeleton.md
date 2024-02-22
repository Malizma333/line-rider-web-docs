## Description

Switches between skeleton views.

### Syntax

```javascript
store.dispatch({ type: "SET_SKELETON", payload: skeletonMode });
```

### Parameters

`skeletonMode`

The target skeleton visual to switch to. The available modes are `0` for normal view, `1` for skeleton view with sprites visible, and `2` for skeleton view with sprites hidden.

## Examples

Enables skeleton view with sprites visible.

```javascript
store.dispatch({
  type: "SET_SKELETON",
  payload: 1
});
```

## Related

- [set_view_option](./set_view_option.md)
