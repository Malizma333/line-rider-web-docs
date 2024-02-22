## Description

Switches the current tool to the target tool.

### Syntax

```javascript
store.dispatch({ type: "SET_TOOL", payload: tool });
```

### Parameters

`tool`

The target tool to change to. List of available tools to switch to can be found [here](../External/tools.json)

## Examples

Switches to the pencil tool.

```javascript
store.dispatch({
  type: "SET_TOOL",
  payload: "PENCIL_TOOL"
});
```

## Related

- [select_line_type](./select_line_type.md)
