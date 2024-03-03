## Description

Switches the color swatch of the current tool to a different line type if it's available.

### Syntax

```js
store.dispatch({ type: "SELECT_LINE_TYPE", payload: lineType });
```

### Parameters

`lineType`

The target line type to set the current tool's swatch to. A full list of line types can be found [here](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L160-L162).

## Examples

Switches the color swatch to blue.

```js
store.dispatch({
  type: "SELECT_LINE_TYPE",
  payload: 0
});
```

## Related

- [set_tool](./set_tool.md)
