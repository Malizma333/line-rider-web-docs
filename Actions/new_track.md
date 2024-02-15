## Description

### Syntax

```javascript
store.dispatch({ type: "NEW_TRACK", payload: trackObject });
```

### Parameters

`trackObject`

Creates a new track object and loads it into the editor. The shape of track objects can be found [here](../External/track_template.js).

### Effects

Creates a new track.

### Returns

None

## Examples

Create a blank legacy track.

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
