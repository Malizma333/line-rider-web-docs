## Description

### Syntax

```javascript
store.dispatch({ type: "RENAME_LAYER", payload: {id, name} });
```

### Parameters

`id`

Id of the layer to rename.

`name`

New name of the target layer.

### Effects

Renames target layer.

### Returns

None

## Examples

Rename layer 1 to "Background Layer".

```javascript
store.dispatch({
  type: "RENAME_LAYER",
  payload: {id: 1, name: "Background Layer"}
});
```

## Related

- [add_layer](./add_layer.md)
- [move_layer](./move_layer.md)
- [remove_layer](./remove_layer.md)
