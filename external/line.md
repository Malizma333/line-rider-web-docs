---
layout: page
title: Line
parent: Externals
---

## Line

Object associated with track lines.

### Properties

`id: number`\
Id of the line.

`type: LineType`\
Type of the line.

`x1: number`\
First x component of the line.

`x2: number`\
Second x component of the line.

`y1: number`\
First y component of the line.

`y2: number`\
Second y component of the line.

`flipped?: boolean`\
Whether the line is flipped.

`leftExtended?: boolean`\
Whether the left extension is enabled.

`rightExtended?: boolean`\
Whether the right extension is enabled.

`layer?: number`\
Layer id that the line is on.

`multiplier?: number`\
Acceleration multiplier of the line if it does have one.

## Line Base

Object associated with track lines and computed data.

### Properties

`extension?: number`\
Information about the line extension.

`flipped?: boolean`\
Whether the line is flipped.

`id: number`\
Id of the line.

`invLengthSq?: number`\
Inverse of the length of the line squared.

`layer?: number`\
Layer id that the line is on.

`leftBound?: number`\
Where the left boundary of the line is.

`leftExtended?: boolean`\
Whether the left extension is enabled.

`length: number`\
Length of the line.

`norm: V2`\
Normalized direction of the line.

`p1: V2`\
First endpoint of the line.

`p2: V2`\
Second endpoint of the line.

`rightBound?: number`\
Where the right boundary of the line is.

`rightExtended?: boolean`\
Whether the right extension is enabled.

`vec: V2`\
Direction of the line.

## Line Type

List of types for line objects.

```js
[
  0, // Blue
  1, // Red
  2 // Green
]
```

## Update Line Actions

List of actions available for updating lines.

```js
[
  "ADD_LINE",
  "ADD_LINES",
  "LOAD_LINES",
  "DUPLICATE_LINES",
  "REMOVE_LINE",
  "REMOVE_LINES",
  "SET_LINES",
  "REPLACE_LINE"
]
```
