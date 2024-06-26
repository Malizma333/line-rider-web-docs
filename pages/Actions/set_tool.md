---
layout: page
title: Set Tool
parent: Actions
permalink: /actions/set_tool/
---

## Set Tool

Switches the current tool to the target tool.

### Syntax

```js
store.dispatch({ type: "SET_TOOL", payload: tool });
```

### Parameters

`tool`

The target tool to change to. List of available tools to switch to can be found [here]({{ site.baseurl }}{% link pages/External/tools.md %})

### Examples

Switches to the pencil tool.

```js
store.dispatch({
  type: "SET_TOOL",
  payload: "PENCIL_TOOL"
});
```

### Related

- [select_line_type](./select_line_type.md)
