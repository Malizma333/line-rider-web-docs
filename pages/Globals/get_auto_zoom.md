---
layout: page
title: Zoom Triggers
parent: Globals
permalink: /globals/get_auto_zoom/
---

## Zoom Triggers

Creates an automated zoom function based on keyframes.

### Syntax

```js
getAutoZoom = createZoomer(keyframes, smoothing = 10)
```

### Parameters

`keyframes`

A [`Keyframe`]({{ site.baseurl }}{% link pages/external/keyframe.md %}) array that defines the zoom levels at specific times.

`smoothing`

A `number` defining the smooth amount at the beginning and end of interpolation.

### Examples

Zooms in interpolating from seconds 2 to 3.

```js
getAutoZoom = createZoomer([
  [0, 0],
  [[2,0], 0],
  [[3,0], 4]
])
```

Zooms out interpolating from seconds 2 to 3 without smoothing.

```js
getAutoZoom = createZoomer([
  [0, 3],
  [[2,0], 3],
  [[3,0], 1]
], 0)
```

### Related

- [get_cam_bounds](./get_cam_bounds.md)
- [get_cam_focus](./get_cam_focus.md)
- [time_remapper](./time_remapper.md)
