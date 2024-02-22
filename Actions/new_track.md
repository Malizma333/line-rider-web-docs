## Description

Creates a new track object and loads it into the editor.

### Syntax

```javascript
store.dispatch({ type: "NEW_TRACK", payload: trackObject });
```

### Parameters

`trackObject`

The new track object to load. The shape of track objects can be found [here](../External/track_template.js).

## Examples

Creates a blank legacy track.

```javascript
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
