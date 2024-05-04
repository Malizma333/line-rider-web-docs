---
layout: page
title: Set Layer Active
parent: Actions
permalink: /actions/set_layer_active/
---

## Description

Switches which layer is the active layer.

### Syntax

```js
store.dispatch({ type: "SET_LAYER_ACTIVE", payload: {id} });
```

### Parameters

`id`

The target layer to set active.

## Examples

Switches the base layer to be the active layer.

```js
store.dispatch({
  type: "SET_LAYER_ACTIVE",
  payload: {id: 0}
});
```

## Related

- [set_layer_editable](./set_layer_editable.md)
- [set_layer_visible](./set_layer_visible.md)
