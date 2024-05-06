---
layout: page
title: Load Track
parent: Actions
permalink: /actions/load_track/
---

## Load Track

Loads a track object from its data.

### Syntax

```js
store.dispatch({ type: "LOAD_TRACK", payload: trackObject });
```

### Parameters

`trackObject`

The [`Track`]({% link pages/External/track.md %}) to load into the editor.

### Examples

Loads a blank track with 2 riders.

```js
store.dispatch({
  type: "LOAD_TRACK",
  payload: {
    startPosition: { x: 0, y: 0 },
    version: "6.2",
    riders: [
      {startPosition: {x: 0, y: 0}, startVelocity: {x: 0.4, y: 0}},
      {startPosition: {x: 0, y: 30}, startVelocity: {x: 0.4, y: 0}}
    ]
  }
});
```

### Related

- [new_track](./new_track.md)
