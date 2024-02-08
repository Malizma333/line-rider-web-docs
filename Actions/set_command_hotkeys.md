## Description

### Syntax

```javascript
store.dispatch({ type: "SET_COMMAND_HOTKEYS", payload: commandHotkeys });
```

### Parameters

`commandHotkeys`

Object mapping command ids to their associated hotkey. A full list of available command ids and their default hotkeys can be found [here](./commands.json).

### Effects

Changes which hotkey triggers which command.

### Returns

None

## Examples

Set the flag command hotkey to "f".

```javascript
store.dispatch({
  type: "SET_COMMAND_HOTKEYS",
  payload: {"triggers.flag": "f"}
});
```

## Related

- [begin_modifier_command](./begin_modifier_command.md)
- [end_modifier_command](./end_modifier_command.md)
- [trigger_command](./trigger_command.md)