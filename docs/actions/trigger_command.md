---
title: Trigger Command
parent: Actions
---

## Trigger Command

Triggers the command given by the command id. This has a similar effect as pressing the hotkey associated with that command.

### Syntax

```js
store.dispatch({ type: "TRIGGER_COMMAND", payload: command, meta: { ignorable: true } });
```

### Parameters

`command`

The trigger command to execute. A full list of available command ids and their default hotkeys can be found [here]({{ site.baseurl }}{% link docs/external/commands.md %}).

### Examples

Triggers the skeleton view hotkey.

```js
store.dispatch({
  type: "TRIGGER_COMMAND",
  payload: "triggers.toggleSkeleton",
  meta: { ignorable: true }
});
```

### Related

- [begin_modifier_command](./begin_modifier_command.md)
- [end_modifier_command](./end_modifier_command.md)
- [set_command_hotkeys](./set_command_hotkeys.md)