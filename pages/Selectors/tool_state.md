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

`tool`

A [`string`]({{ site.baseurl }}{% link pages/External/tools.md %}) representing one of the registered editor tools available.

