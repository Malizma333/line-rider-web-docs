---
layout: page
title: Add Line
parent: Globals
permalink: /globals/add_line/
---

## Add Line

Adds a line to the non-committed engine.

### Syntax

```js
addLine(x1, y1, x2, y2, lineType, flipped)
```

### Parameters

`x1`, `y1`, `x2`, `y2`

The endpoints of the line to add.

`lineType`

The [`LineType`]({{ site.baseurl }}{% link pages/External/line.md %}) of the line to add.

`flipped`

A boolean indicating whether the line to add is flipped.

### Examples

Adds a green diagonal line at the origin of the track.

```js
addLine(0, 0, 20, 20, 2, false)
```
