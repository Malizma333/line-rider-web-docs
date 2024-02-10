## Description

### Syntax

```javascript
store.dispatch({ type: "SET_LAYER_VISIBLE", payload: {id, visible} });
```

### Parameters

`id`

Target layer to toggle visibility of.

### Effects

Toggles visibility of target layer.

### Returns

None

## Examples

Set layer 1 to invisible.

```javascript
store.dispatch({
  type: "SET_LAYER_VISIBLE",
  payload: {id: 1, visible: false}
});
```

## Related

- [set_layer_active](./set_layer_active.md)
- [set_layer_editable](./set_layer_editable.md)
