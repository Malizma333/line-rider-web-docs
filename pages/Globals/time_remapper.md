---
layout: page
title: Time Remapping Triggers
parent: Globals
permalink: /globals/time_remap/
---

## Time Remapping Triggers

Creates an automated time remapping function based on keyframes.

### Syntax

```js
timeRemapper = createTimeRemapper(keyframes, interpolate = false)
```

### Parameters

`keyframes`

A [`Keyframe`]({{ site.baseurl }}{% link pages/External/keyframe.md %}) array that defines the playback speed at specific times.

`interpolate`

A `boolean` indicating whether to interpolate the time delay between frames.

### Examples

Slows down to 1/4 speed at 1 second, then speeds up back to normal speed at 2 seconds.

```js
timeRemapper = createTimeRemapper([
  [0, 1],
  [[1,0], 1/4],
  [[2,0], 1]
])
```

Slows down to 1/8 speed between 1 and 2 seconds, then speeds back up to normal speed at 2.5 seconds.

```js
timeRemapper = createTimeRemapper([
  [0, 1],
  [[1,0], 1],
  [[2,0], 1/8],
  [[2,20], 1/8],
  [[2,20], 1] // for jumps
], true)
```
