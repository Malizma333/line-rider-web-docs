## Description

### Syntax

```javascript
store.dispatch({ type: "REMOVE_LAYER", payload: {id} });
```

### Parameters

`id`

Id of the layer to remove.

### Effects

Remove target layer from the layer array.

## Examples

Remove layer 1.

```javascript
store.dispatch({
  type: "REMOVE_LAYER",
  payload: {id: 1}
});
```

## Related

- [add_layer](./add_layer.md)
- [move_layer](./move_layer.md)
- [rename_layer](./rename_layer.md)
