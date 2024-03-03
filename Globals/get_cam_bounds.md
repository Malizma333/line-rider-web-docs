## Description

Creates an automated camera bounds function based on keyframes.

### Syntax

```js
getCamBounds = createBoundsPanner(keyframes, smoothing = 10)
```

### Parameters

`keyframes`

An array of keyframes that define the zoom levels at specific times. The shape of a camera bounds keyframe object can be found [here](../External/templates.js).

`smoothing`

A `number` defining the smooth amount at the beginning and end of interpolation.

## Examples

Increases the pull radius and moves the camera up interpolating from seconds 2 to 3, then centers the camera on the rider at 4 seconds.

```js
getCamBounds = createBoundsPanner([
  [0, {w: 0.4, h: 0.4, x: 0, y: 0}],
  [[2,0], {w: 0.4, h: 0.4, x: 0, y: 0}],
  [[3,0], {w: 0.6, h: 0.4, x: 0, y: -0.3}],
  [[4,0], {w: 0.6, h: 0.4, x: 0, y: -0.3}],
  [[4,1], {w: 0, h: 0, x: 0, y: 0}]
])
```

## Related

- [get_auto_zoom](./get_auto_zoom.md)
- [get_cam_focus](./get_cam_focus.md)
- [time_remapper](./time_remapper.md)
