## Description

### Syntax

```javascript
store.dispatch({ type: "UPDATE_LINES", payload: { linesToRemove, linesToAdd, initialLoad: false }, meta: { name } });
```

### Parameters

`linesToRemove`

The list of lines to remove by line id. Lines are indexed starting from 1.

`linesToAdd`

The list of lines to add. The format of a line object can be found [here](./line_template.js).

`name`

The type of update line action to execute.

### Effects

Updates the line array in the non-committed engine. This must be used with `COMMIT_TRACK_CHANGES` and `REVERT_TRACK_CHANGES` to push changes to the committed engine and apply to edit history.

### Returns

None

## Examples

Creates a triangle of lines.

```javascript
store.dispatch({
  type: "UPDATE_LINES",
  payload: { linesToAdd: [
    {x1: 0, y1: 0, x2: 5, y2: 0, type: 2},
    {x1: 5, y1: 0, x2: 5, y2: 5, type: 2},
    {x1: 5, y1: 5, x2: 0, y2: 0, type: 2}
  ], initialLoad: false },
  meta: { name: "ADD_LINES" }
});
```

Removes the first three lines.

```javascript
store.dispatch({
  type: "UPDATE_LINES",
  payload: { linesToRemove: [1, 2, 3], initialLoad: false },
  meta: { name: "REMOVE_LINES" }
});
```

## Related
