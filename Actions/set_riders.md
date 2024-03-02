## Description

Configures the rider properties for the current track.

### Syntax

```js
store.dispatch({ type: "SET_RIDERS", payload: riders });
```

### Parameters

`riders`

The array of rider objects to set the track riders to. The shape of a rider object can be found [here](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L183-L190).

## Examples

Removes all riders from the current track.

```js
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
