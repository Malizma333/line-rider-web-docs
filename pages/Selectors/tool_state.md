---
layout: page
title: Tool State
parent: Selectors
permalink: /selectors/tool_state/
---

## Tool State

The editor state of a specific tool. Undefined for tools without data and for tools that haven't been selected yet.

### Syntax

```js
Selectors.getToolState(tool)
```

### Parameters

`tool: string`

The name of an available editor [`Tool`]({{ site.baseurl }}{% link pages/External/tools.md %}).
