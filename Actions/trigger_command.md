## Description

### Syntax

```javascript
store.dispatch({ type: "TRIGGER_COMMAND", payload: command, meta: { ignorable: true } });
```

### Parameters

`command`

Trigger command to execute. A full list of available command ids and their default hotkeys can be found [here](./commands.txt).

### Effects

Triggers the hotkey command given by the trigger id.

### Returns

None

## Examples

Trigger the skeleton view hotkey.

```javascript
store.dispatch({
  type: "TRIGGER_COMMAND",
  payload: "triggers.toggleSkeleton",
  meta: { ignorable: true }
});
```

## Related

- [begin_modifier_command](./begin_modifier_command.md)
- [end_modifier_command](./end_modifier_command.md)
- [set_command_hotkeys](./set_command_hotkeys.md)