---
title: Set Track Details
parent: Actions
---

## Set Track Details

Configures the details of the currently loaded track.

### Syntax

```js
store.dispatch({ type: "trackData/SET_TRACK_DETAILS", payload: { title, creator, description } });
```

### Parameters

`title`

The name of the track.

`creator`

The author of the track.

`description`

A short description about the track.

### Examples

Switches the title of the track to "My Track" and removes the author and description.

```js
store.dispatch({
  type: "trackData/SET_TRACK_DETAILS",
  payload: {
    title: "My Track",
    creator: "",
    description: ""
  }
});
```

### Related

- [load_track](./load_track.md)
- [set_riders](./set_riders.md)
- [set_local_file](./set_local_file.md)
- [set_track_script](./set_track_script.md)
