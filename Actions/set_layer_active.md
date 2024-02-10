## Description

### Syntax

```javascript
store.dispatch({ type: "SET_LAYER_ACTIVE", payload: {id} });
```

### Parameters

`id`

Target layer to set active.

### Effects

Sets which layer is the active layer.

### Returns

None

## Examples

Set the base layer to be the active layer.

```javascript
store.dispatch({
  type: "SET_LAYER_ACTIVE",
  payload: {id: 0}
});
```

## Related

- [set_layer_editable](./set_layer_editable.md)
- [set_layer_visible](./set_layer_visible.md)
