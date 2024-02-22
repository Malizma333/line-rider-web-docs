## Description

Switches the color swatch of the current tool to a different line type if it's available.

### Syntax

```javascript
store.dispatch({ type: "SELECT_LINE_TYPE", payload: lineType });
```

### Parameters

`lineType`

The target line type to set the current tool's swatch to.

## Examples

Switches the color swatch to blue.

```javascript
store.dispatch({
  type: "SELECT_LINE_TYPE",
  payload: 0
});
```

## Related

- [set_tool](./set_tool.md)
