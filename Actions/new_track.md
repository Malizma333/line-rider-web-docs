## Description

Creates a new track object and loads it into the editor.

### Syntax

```js
store.dispatch({ type: "NEW_TRACK", payload: trackObject });
```

### Parameters

`trackObject`

The new [`Track`](../External/track.js) to load.

## Examples

Creates a blank legacy track.

```js
store.dispatch({
  type: "NEW_TRACK",
  payload: {
    startPosition: { x: 0, y: 0 },
    version: "6.1",
    label: "",
    creator: "",
    description: "",
    dirty: false,
    saveTime: null,
    viewOnly: false,
    derivedFrom: null
  }
});
```

## Related

- [load_track](./load_track.md)
