---
layout: page
title: Add Lines
parent: Actions
permalink: /actions/add_lines/
---

## Add Lines

Adds new lines to the uncommitted engine.

### Syntax

```js
Actions.addLines(lines)
```

### Parameters

`lines: Line[]`

A list of [`Line`]({{ site.baseurl }}{% link pages/External/line.md %}) objects. If layer is not specified, it defaults to the active layer.

### Examples

Adds a right triangle of each line type to the active layer.

```js
Actions.addLines([
    { x1: 0, y1: 0, x2: 0, y2: 10, type: 0 },
    { x1: 0, y1: 10, x2: 10, y2: 10, type: 1 },
    { x1: 10, y1: 10, x2: 0, y2: 0, type: 2 },
])
```
