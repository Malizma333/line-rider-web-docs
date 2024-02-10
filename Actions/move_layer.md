## Description

### Syntax

```javascript
store.dispatch({ type: "MOVE_LAYER", payload: {id, index} });
```

### Parameters

`id`

Id of the layer to move.

`index`

New index for the layer to move to.

### Effects

Moves a target layer to a new location in the layer array.

### Returns

None

## Examples

Move layer 1 to the second position above the base layer.

```javascript
store.dispatch({
  type: "MOVE_LAYER",
  payload: {id: 1, index: 2}
});
```

## Related

- [add_layer](./add_layer.md)
- [remove_layer](./remove_layer.md)
- [rename_layer](./rename_layer.md)
