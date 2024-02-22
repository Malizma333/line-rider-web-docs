## Description

Updates the line array in the non-committed engine.

### Syntax

```js
store.dispatch({ type: "UPDATE_LINES", payload: { linesToRemove, linesToAdd, initialLoad: false }, meta: { name } });
```

### Parameters

`linesToRemove`

The list of lines to remove by line id. Lines are indexed starting from one (1).

`linesToAdd`

The list of lines to add. The format of a line object can be found [here](../External/line_template.js).

`name`

The type of update line action to execute.

## Examples

Creates a triangle of lines.

```js
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

```js
store.dispatch({
  type: "UPDATE_LINES",
  payload: { linesToRemove: [1, 2, 3], initialLoad: false },
  meta: { name: "REMOVE_LINES" }
});
```

## Related