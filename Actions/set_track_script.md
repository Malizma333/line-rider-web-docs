## Description

### Syntax

```javascript
store.dispatch({ type: "trackData/SET_TRACK_SCRIPT", payload: script });
```

### Parameters

`script`

External script of the track file.

### Effects

Sets the track file script.

## Examples

Clear the script of the current track file.

```javascript
store.dispatch({
  type: "trackData/SET_TRACK_SCRIPT",
  payload: ""
});
```

## Related

- [load_track](./load_track.md)
- [set_riders](./set_riders.md)
- [set_local_file](./set_local_file.md)
- [set_track_details](./set_track_details.md)
