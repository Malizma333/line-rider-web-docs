---
layout: page
title: Add Circle
parent: Globals
permalink: /globals/add_circle/
---

## Add Circle

Adds a polygon to the non-committed engine.

### Syntax

```js
addCircle(radius, sides, xOffset, yOffset, lineType, flipped)
```

### Parameters

`radius`

The size of the polygon to add.

`sides`

The number of sides the polygon has.

`xOffset`, `yOffset`

The offset of the polygon from the origin.

`lineType`

The [`LineType`](../External/line_type.js) of the lines in the circle.

`flipped`

A boolean indicating whether the lines within the polygon are flipped.

### Examples

Adds a green circle above the origin of the track.

```js
addCircle(30, 100, 0, -50, 2, false)
```

### Related

- [add_line](./add_line.md)
