---
layout: page
title: End Modifier Command
parent: Actions
permalink: /actions/end_modifier_command/
---

## End Modifier Command

Stops running the modifier command given by the command id. This has a similar effect as letting go of the hotkey associated with that command after holding it.

### Syntax

```js
store.dispatch({ type: "END_MODIFIER_COMMAND", payload: command, meta: { ignorable: true } });
```

### Parameters

`command`

Modifier command to stop executing. This will stop any modifiers currently active by `BEGIN_MODIFIER_COMMAND` or by user input until they are activated again. A full list of available command ids and their default hotkeys can be found [here]({{ site.baseurl }}{% link pages/external/commands.md %}).

### Examples

Stops the fast-forward playback hotkey modifier.

```js
store.dispatch({
  type: "END_MODIFIER_COMMAND",
  payload: "modifiers.fastForward",
  meta: { ignorable: true }
});
```

### Related

- [begin_modifier_command](./begin_modifier_command.md)
- [set_command_hotkeys](./set_command_hotkeys.md)
- [trigger_command](./trigger_command.md)