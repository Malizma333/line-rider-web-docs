## Description

Removes target layer from the layer array.

### Syntax

```javascript
store.dispatch({ type: "REMOVE_LAYER", payload: {id} });
```

### Parameters

`id`

The id of the layer to remove.

## Examples

Removes the layer with an id of one (1).

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
