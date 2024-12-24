---
title: Move Layer
parent: Actions
---

## Move Layer

Moves a target layer to a new location in the layer array.

### Syntax

```js
store.dispatch({ type: "MOVE_LAYER", payload: {id, index} });
```

### Parameters

`id`

The id of the layer to move.

`index`

The new index for the layer to move to.

### Examples

Moves layer 1 to the second position above the base layer.

```js
store.dispatch({
  type: "MOVE_LAYER",
  payload: {id: 1, index: 2}
});
```

### Related

- [add_layer](./add_layer.md)
- [remove_layer](./remove_layer.md)
- [rename_layer](./rename_layer.md)
