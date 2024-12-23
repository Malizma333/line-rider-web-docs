---
title: Active Tool
parent: Selectors
---

## Active Tool

Returns a [Tool]({{ site.baseurl }}{% link docs/external/tools.md %}) describing the currently active tool.

### Syntax

```js
function getActiveTool(state) {
  return state.selectedTool;
}
```

### Related

- [tool_state](./tool_state.md)
