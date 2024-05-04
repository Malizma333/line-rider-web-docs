---
layout: page
title: Active Tool
parent: Selectors
permalink: /selectors/active_tool/
---

## Description

Returns a [Tool](../External/tools.json) describing the currently active tool.

### Syntax

```js
function getActiveTool(state) {
  return state.selectedTool;
}
```

## Related

- [tool_state](./tool_state.md)