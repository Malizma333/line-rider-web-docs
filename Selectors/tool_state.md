## Description

Returns a [ToolState](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L219-L225) describing the state of a target tool.

### Syntax

```js
function getToolState(state, toolId) {
  return state.toolState[toolId];
}
```

### Parameters

`toolId`

The id of the target tool. A full list of available tool ids can be found [here](../External/tools.json).

## Examples

Returns the state of the select tool.

```js
getToolState(
  store.getState(),
  "SELECT_TOOL"
)
```

## Related

- [active_tool](./active_tool.md)
