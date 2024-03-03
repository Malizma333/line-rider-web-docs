## Description

Creates an automated camera focuser function based on keyframes.

### Syntax

```js
getCamFocus = createFocuser(keyframes, smoothing = 10)
```

### Parameters

`keyframes`

An array of keyframes that define the zoom levels at specific times. The shape of a camera focus keyframe object can be found [here](../External/templates.js).

`smoothing`

A `number` defining the smooth amount at the beginning and end of interpolation.

## Examples

Focuses from rider 1 to rider 2 interpolating from seconds 2 to 3, then focuses more on rider 3 than rider 2 interpolating from seconds 4 to 5.

```js
getCamFocus = createFocuser([
  [0, [1,0,0]],
  [[2,0], [1,0,0]],
  [[3,0], [0,1,0]],
  [[4,0], [0,1,0]],
  [[5,0], [0,0.5,1]]
])
```

## Related

- [get_auto_zoom](./get_auto_zoom.md)
- [get_cam_bounds](./get_cam_bounds.md)
- [time_remapper](./time_remapper.md)
