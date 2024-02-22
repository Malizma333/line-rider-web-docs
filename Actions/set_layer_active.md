## Description

Switches which layer is the active layer.

### Syntax

```javascript
store.dispatch({ type: "SET_LAYER_ACTIVE", payload: {id} });
```

### Parameters

`id`

The target layer to set active.

## Examples

Switches the base layer to be the active layer.

```javascript
store.dispatch({
  type: "SET_LAYER_ACTIVE",
  payload: {id: 0}
});
```

## Related

- [set_layer_editable](./set_layer_editable.md)
- [set_layer_visible](./set_layer_visible.md)
