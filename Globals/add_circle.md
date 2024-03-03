## Description

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

The type of line to add. A full list of line types can be found [here](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L160-L162).

`flipped`

A boolean indicating whether the lines within the polygon are flipped.

## Examples

Adds a green circle above the origin of the track.

```js
addCircle(30, 100, 0, -50, 2, false)
```

## Related

- [add_line](./add_line.md)
