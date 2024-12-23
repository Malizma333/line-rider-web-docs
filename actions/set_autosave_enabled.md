---
layout: page
title: Toggle Autosave
parent: Actions
---

## Toggle Autosave

Enables or disables autosaving.

### Syntax

```js
store.dispatch({ type: "SET_AUTOSAVE_ENABLED", payload: enabled });
```

### Parameters

`enabled`

A boolean indicating whether the track should autosave.

### Examples

Disables autosaving.

```js
store.dispatch({
  type: "SET_AUTOSAVE_ENABLED",
  payload: false
});
```

### Related

- [load_autosave](./load_autosave.md)
