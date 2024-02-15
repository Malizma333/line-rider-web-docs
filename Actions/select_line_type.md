## Description

### Syntax

```javascript
store.dispatch({ type: "SELECT_LINE_TYPE", payload: lineType });
```

### Parameters

`lineType`

Target line type to set the current tool's swatch to.

### Effects

Changes the color swatch of the current tool to a different line type if it's available.

## Examples

Set the color swatch to blue.

```javascript
store.dispatch({
  type: "SELECT_LINE_TYPE",
  payload: 0
});
```

## Related

- [set_tool](./set_tool.md)
