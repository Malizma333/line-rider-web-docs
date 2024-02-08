## Description

### Syntax

```javascript
store.dispatch({ type: "END_MODIFIER_COMMAND", payload: command, meta: { ignorable: true } });
```

### Parameters

`command`

Modifier command to stop executing. This will stop any modifiers currently active by `BEGIN_MODIFIER_COMMAND` or by user input until they are activated again. A full list of available command ids and their default hotkeys can be found [here](./commands.json).

### Effects

Stops the hotkey command given by the modifier id.

### Returns

None

## Examples

Stop the fast-forward playback hotkey modifier.

```javascript
store.dispatch({
  type: "END_MODIFIER_COMMAND",
  payload: "modifiers.fastForward",
  meta: { ignorable: true }
});
```

## Related

- [begin_modifier_command](./begin_modifier_command.md)
- [set_command_hotkeys](./set_command_hotkeys.md)
- [trigger_command](./trigger_command.md)