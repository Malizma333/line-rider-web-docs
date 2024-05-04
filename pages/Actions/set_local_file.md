---
layout: page
title: Toggle Local File Saves
parent: Actions
permalink: /actions/set_local_file/
---

## Description

Enables or disables local file saving.

### Syntax

```js
store.dispatch({ type: "trackData/SET_LOCAL_FILE", payload: saveToFile });
```

### Parameters

`saveToFile`

A boolean indicating whether the current track should save to a local file.

## Examples

Allows the current track to save to a local file.

```js
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
