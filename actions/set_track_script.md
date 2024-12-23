---
layout: page
title: Set Track Script
parent: Actions
---

## Set Track Script

Configures the track file script.

### Syntax

```js
store.dispatch({ type: "trackData/SET_TRACK_SCRIPT", payload: script });
```

### Parameters

`script`

The new script to replace the current track script with.

### Examples

Clears the script of the current track file.

```js
store.dispatch({
  type: "trackData/SET_TRACK_SCRIPT",
  payload: ""
});
```

### Related

- [load_track](./load_track.md)
- [set_riders](./set_riders.md)
- [set_local_file](./set_local_file.md)
- [set_track_details](./set_track_details.md)
