---
layout: page
title: Set Riders
parent: Actions
permalink: /actions/set_riders/
---

## Set Riders

Sets the riders of the uncommitted track.

### Syntax

```js
Actions.setRiders(riders)
```

### Parameters

`riders: Rider[]`

A list of [`Rider`]({{ site.baseurl }}{% link pages/External/rider.md %}) objects.

### Examples

Adds two riders to the track, space apart and upside-down.

```js
Actions.setRiders([
  { startPosition: { x: 0, y: 0 }, startVelocity: { x: 0.4, y: 0 }, startAngle: 180 },
  { startPosition: { x: 50, y: 0 }, startVelocity: { x: 0.4, y: 0 }, startAngle: 180, remountable: true },
])
```
