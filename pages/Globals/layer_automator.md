---
layout: page
title: Layer Visibility Triggers
parent: Globals
permalink: /globals/layer_automator/
---

## Layer Visibility Triggers

Creates an automated layer visibility function based on keyframes.

### Syntax

```js
getLayerVisibleAtTime = createLayerAutomator(keyframes, [sixty_fps])
```

### Parameters

`keyframes`

A `Record` of (id, [`Keyframe`]({{ site.baseurl }}{% link pages/External/keyframe.md %})[]) pairs that defines the visibility of each layer at specific times. See `window.createLayerAutomator.help` for more information.

```js
keyframes = {
  0: [
    [[minutes, seconds, frames], { on: number, off: number, offset: number }],
    ...
  ],
  1: [...],
  ...
}
```

`sixty_fps`

A `boolean` indicating whether to target sixty fps instead of forty.

### Examples

Keeps the base layer off, toggles layer 1 once, and flashes layer 2 over an interval.

```js
getLayerVisibleAtTime = createLayerAutomator({
  0: [
    [[0, 0, 0], {on: 1, off: 0, offset: 0}]
  ], // Keep layer 0 on
  1: [
    [[0, 0, 0], {on: 0, off: 1, offset: 0}],
    [[0, 1, 0], {on: 1, off: 0, offset: 0}]
  ], // Turn layer 1 off, then turn it on after a second
  2: [
    [[0, 0, 0], {on: 2, off: 2, offset: 0}]
  ], // Toggle layer 2 every 2 frames
})
```
