## Description

### Syntax

```javascript
store.dispatch({ type: "SET_TOOL", payload: tool });
```

### Parameters

`tool`

Target tool to change to. List of available tools to switch to can be found [here](../External/tools.json)

### Effects

Changes the tool to the target tool.

### Returns

None

## Examples

Set the active tool to the pencil tool.

```javascript
store.dispatch({
  type: "SET_TOOL",
  payload: "PENCIL_TOOL"
});
```

## Related

- [select_line_type](./select_line_type.md)
