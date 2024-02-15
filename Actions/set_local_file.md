## Description

### Syntax

```javascript
store.dispatch({ type: "trackData/SET_LOCAL_FILE", payload: saveToFile });
```

### Parameters

`saveToFile`

Sets whether the current track should save to a local file.

### Effects

Toggles local file saving.

## Examples

Set the track to save to a local file.

```javascript
store.dispatch({
  type: "trackData/SET_LOCAL_FILE",
  payload: true
});
```

## Related

- [load_track](./load_track.md)
- [set_riders](./set_riders.md)
- [set_track_details](./set_track_details.md)
- [set_track_script](./set_track_script.md)
