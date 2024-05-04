---
layout: page
title: Toggle Setting
parent: Actions
permalink: /actions/toggle_setting/
---

## Toggle Setting

Toggles the target setting based on a key.

### Syntax

```js
store.dispatch({ type: "TOGGLE_SETTING", payload: { key } });
```

### Parameters

`key`

The id of the target setting to toggle. The only available setting for web is `'cam.useEditorFollower'`. The other settings available are mobile-exclusive.

### Examples

Toggles whether the editor camera keeps the rider in view while scrubbing.

```js
store.dispatch({
  type: "TOGGLE_SETTING",
  payload: { key: 'cam.useEditorFollower' }
});
```

### Related
