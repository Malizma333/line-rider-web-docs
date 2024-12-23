---
layout: page
title: Set Riders
parent: Actions
---

## Set Riders

Configures the rider properties for the current track.

### Syntax

```js
store.dispatch({ type: "SET_RIDERS", payload: riders });
```

### Parameters

`riders`

The [`Rider`]({{ site.baseurl }}{% link external/rider.md %}) array to set the track riders to.

### Examples

Removes all riders from the current track.

```js
store.dispatch({
  type: "SET_RIDERS",
  payload: []
});
```

### Related

- [load_track](./load_track.md)
- [set_local_file](./set_local_file.md)
- [set_track_details](./set_track_details.md)
- [set_track_script](./set_track_script.md)
