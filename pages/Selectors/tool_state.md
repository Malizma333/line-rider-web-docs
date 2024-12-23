---
layout: page
title: Tool State
parent: Selectors
permalink: /selectors/tool_state/
---

## Tool State

Returns a [`ToolState`]({{ site.baseurl }}{% link pages/external/tools.md %}) describing the state of a target tool.

### Syntax

```js
function getToolState(state, toolId) {
  return state.toolState[toolId];
}
```

### Parameters

`toolId`

The id of the target tool. A full list of available tool ids can be found [here]({{ site.baseurl }}{% link pages/external/tools.md %}).

### Examples

Returns the state of the select tool.

```js
getToolState(
  store.getState(),
  "SELECT_TOOL"
)
```

### Related

- [active_tool](./active_tool.md)
