## Description

Adds a line to the non-committed engine.

### Syntax

```js
addLine(x1, y1, x2, y2, lineType, flipped)
```

### Parameters

`x1`, `y1`, `x2`, `y2`

The endpoints of the line to add.

`lineType`

The [`LineType`](../External/line_type.js) of the line to add.

`flipped`

A boolean indicating whether the line to add is flipped.

## Examples

Adds a green diagonal line at the origin of the track.

```js
addLine(0, 0, 20, 20, 2, false)
```

## Related

- [add_circle](./add_circle.md)
