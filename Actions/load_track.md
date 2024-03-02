## Description

Loads a track object from its data.

### Syntax

```js
store.dispatch({ type: "LOAD_TRACK", payload: trackObject });
```

### Parameters

`trackObject`

The track object to load into the editor. The shape of track objects can be found [here](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L192-L207).

## Examples

Loads a blank track with two (2) riders.

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

## Related

- [new_track](./new_track.md)
