## Description

Renames a specific layer.

### Syntax

```js
store.dispatch({ type: "RENAME_LAYER", payload: {id, name} });
```

### Parameters

`id`

The id of the layer to rename.

`name`

The new name of the target layer.

## Examples

Renames layer 1 to "Background Layer".

```js
store.dispatch({
  type: "RENAME_LAYER",
  payload: {id: 1, name: "Background Layer"}
});
```

## Related

- [add_layer](./add_layer.md)
- [move_layer](./move_layer.md)
- [remove_layer](./remove_layer.md)
