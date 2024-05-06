---
layout: page
title: Begin Modifier Command
parent: Actions
permalink: /actions/begin_modifier_command/
---

## Begin Modifier Command

Begins running the modifier command given by the command id. This has a similar effect as holding the hotkey associated with that command.

### Syntax

```js
store.dispatch({ type: "BEGIN_MODIFIER_COMMAND", payload: command, meta: { ignorable: true } });
```

### Parameters

`command`

The modifier command to start executing. This command will not stop until an `END_MODIFIER_COMMAND` action with the same id is called or a user input triggers the end of the command. A full list of available command ids and their default hotkeys can be found [here]({% link pages/External/commands.md %}).

### Examples

Starts fast-forwarding playback through the modifier hotkey.

```js
store.dispatch({
  type: "BEGIN_MODIFIER_COMMAND",
  payload: "modifiers.fastForward",
  meta: { ignorable: true }
});
```

### Related

- [end_modifier_command](./end_modifier_command.md)
- [set_command_hotkeys](./set_command_hotkeys.md)
- [trigger_command](./trigger_command.md)