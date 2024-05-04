---
layout: page
title: Toggle Onion Skinning
parent: Actions
permalink: /actions/set_onion_skin/
---

## Description

Enables or disables onion skinning.

### Syntax

```js
store.dispatch({ type: "SET_ONION_SKIN", payload: onionSkin });
```

### Parameters

`onionSkin`

A boolean indicating whether the timeline should render onion skins.

## Examples

Enables onion skinning.

```js
store.dispatch({
  type: "SET_ONION_SKIN",
  payload: true
});
```

## Related

- [set_onion_skin_frames_after](./set_onion_skin_frames_after.md)
- [set_onion_skin_frames_before](./set_onion_skin_frames_before.md)
- [set_view_option](./set_view_option.md)
