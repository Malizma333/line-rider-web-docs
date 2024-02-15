## Description

### Syntax

```javascript
store.dispatch({ type: "trackData/SET_TRACK_DETAILS", payload: { title, creator, description } });
```

### Parameters

`title`

Name of the track.

`creator`

Author of the track.

`description`

A short description about the track.

### Effects

Sets the details of the currently loaded track.

## Examples

Set the title of the track with a blank author and description.

```javascript
store.dispatch({
  type: "trackData/SET_TRACK_DETAILS",
  payload: {
    title: "My Track",
    creator: "",
    description: ""
  }
});
```

## Related

- [load_track](./load_track.md)
- [set_riders](./set_riders.md)
- [set_local_file](./set_local_file.md)
- [set_track_script](./set_track_script.md)
