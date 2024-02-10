## Description

### Syntax

```javascript
store.dispatch({ type: "SET_LAYER_EDITABLE", payload: {id, editable} });
```

### Parameters

`id`

Target layer to set editable.

### Effects

Sets edibility of target layer.

### Returns

None

## Examples

Set layer 2 to be editable.

```javascript
store.dispatch({
  type: "SET_LAYER_EDITABLE",
  payload: {id: 2, editable: true}
});
```

## Related

- [set_layer_active](./set_layer_active.md)
- [set_layer_visible](./set_layer_visible.md)
