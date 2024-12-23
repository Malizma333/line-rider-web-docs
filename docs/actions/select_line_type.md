---
title: Select Line Type
parent: Actions
---

## Select Line Type

Switches the color swatch of the current tool to a different line type if it's available.

### Syntax

```js
store.dispatch({ type: "SELECT_LINE_TYPE", payload: lineType });
```

### Parameters

`lineType`

The target [`LineType`]({{ site.baseurl }}{% link docs/external/line.md %}) to set the current tool's swatch to.

### Examples

Switches the color swatch to blue.

```js
store.dispatch({
  type: "SELECT_LINE_TYPE",
  payload: 0
});
```

### Related

- [set_tool](./set_tool.md)
