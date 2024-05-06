---
layout: page
title: Active Tool
parent: Selectors
permalink: /selectors/active_tool/
---

## Active Tool

Returns a [Tool]({{ site.baseurl }}{% link pages/External/tools.md %}) describing the currently active tool.

### Syntax

```js
function getActiveTool(state) {
  return state.selectedTool;
}
```

### Related

- [tool_state](./tool_state.md)
