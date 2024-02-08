## Description

### Syntax

```javascript
store.dispatch({ type: "BEGIN_MODIFIER_COMMAND", payload: command, meta: { ignorable: true } });
```

### Parameters

`command`

Modifier command to start executing. This command will not stop until an `END_MODIFIER_COMMAND` action with the same id is called or a user input triggers the end of the command. A full list of available command ids and their default hotkeys can be found [here](./commands.json).

### Effects

Starts the hotkey command given by the modifier id.

### Returns

None

## Examples

Start the fast-forward playback hotkey modifier.

```javascript
store.dispatch({
  type: "BEGIN_MODIFIER_COMMAND",
  payload: "modifiers.fastForward",
  meta: { ignorable: true }
});
```

## Related

- [end_modifier_command](./end_modifier_command.md)
- [set_command_hotkeys](./set_command_hotkeys.md)
- [trigger_command](./trigger_command.md)