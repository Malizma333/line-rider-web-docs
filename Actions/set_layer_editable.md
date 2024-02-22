## Description

Toggles whether the target layer is editable.

### Syntax

```javascript
store.dispatch({ type: "SET_LAYER_EDITABLE", payload: {id, editable} });
```

### Parameters

`id`

The target layer to set editable.

## Examples

Toggles layer two (2) to be editable.

```javascript
store.dispatch({
  type: "SET_LAYER_EDITABLE",
  payload: {id: 2, editable: true}
});
```

## Related

- [set_layer_active](./set_layer_active.md)
- [set_layer_visible](./set_layer_visible.md)
