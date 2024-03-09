## Description

Contains a json object that holds an `{x, y}` gravity vector.

### Syntax

```js
window.$ENGINE_PARAMS
```

## Examples

Disables gravity by setting it to zero.

```js
$ENGINE_PARAMS.gravity = {x:0, y:0}
```

Disables gravity for the first second, then enables default gravity.

```js
// Clears physics and camera cache
window.store.getState().camera.playbackFollower._frames.length = 0;
window.store.getState().simulator.engine.engine._computed._frames.length = 1;

Object.defineProperty(window.$ENGINE_PARAMS, "gravity", { get() {
  const index = window.store.getState().simulator.engine.engine._computed._frames.length;
  if(index < 40) {
    return {x: 0, y: 0}
  } else {
    return {x: 0, y: 0.175}
  }
}})
```

## Related
