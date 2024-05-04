---
layout: page
title: Set Layer Visible
parent: Actions
permalink: /actions/set_layer_visible/
---

## Description

Toggles the visibility of target layer.

### Syntax

```js
store.dispatch({ type: "SET_LAYER_VISIBLE", payload: {id, visible} });
```

### Parameters

`id`

The target layer to toggle visibility of.

## Examples

Toggles layer 1 to be invisible.

```js
store.dispatch({
  type: "SET_LAYER_VISIBLE",
  payload: {id: 1, visible: false}
});
```

## Related

- [set_layer_active](./set_layer_active.md)
- [set_layer_editable](./set_layer_editable.md)
