---
layout: page
title: Gravity Triggers
parent: Globals
permalink: /globals/set_custom_gravity/
---

## Gravity Triggers

Creates an automated gravity function based on keyframes.

### Syntax

```js
setCustomGravity(keyframes)
```

### Parameters

`keyframes`

An `Array` of [`Keyframe`]({{ site.baseurl }}{% link pages/External/keyframe.md %})[], where each keyframe array corresponds to each rider. See `window.setCustomGravity.help` for more information.

### Examples

Gives the first rider normal gravity and the second rider zero gravity for the first second of track.

```js
setCustomGravity([
  [
    [[0, 0, 0], {x: 0, y: 0.175}]
  ], // Give rider 0 normal gravity
  [
    [[0, 0, 0], {x: 0, y: 0}],
    [[0, 1, 0], {x: 0, y: 0.175}],
  ] // Give rider 1 zero gravity, then enable normal gravity after a second
])
```
