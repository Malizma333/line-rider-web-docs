## Description

### Syntax

```javascript
store.dispatch({ type: "SET_RIDERS", payload: riders });
```

### Parameters

`riders`

Array of rider objects to set the track riders to. The shape of a rider object can be found [here](../External/rider_template.js).

### Effects

Sets the riders for the current track.

## Examples

Remove all riders from the current track.

```javascript
store.dispatch({
  type: "SET_RIDERS",
  payload: []
});
```

## Related

- [load_track](./load_track.md)
- [set_local_file](./set_local_file.md)
- [set_track_details](./set_track_details.md)
- [set_track_script](./set_track_script.md)
