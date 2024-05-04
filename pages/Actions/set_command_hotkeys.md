---
layout: page
title: Command Hotkeys
parent: Actions
permalink: /actions/set_command_hotkeys/
---

## Command Hotkeys

Switches which hotkey triggers which command.

### Syntax

```js
store.dispatch({ type: "SET_COMMAND_HOTKEYS", payload: commandHotkeys });
```

### Parameters

`commandHotkeys`

The object that maps command ids to their associated hotkey. A full list of available command ids and their default hotkeys can be found [here](../External/commands.json).

### Examples

Switches the flag command hotkey to "f".

```js
store.dispatch({
  type: "SET_COMMAND_HOTKEYS",
  payload: {"triggers.flag": "f"}
});
```

### Related

- [begin_modifier_command](./begin_modifier_command.md)
- [end_modifier_command](./end_modifier_command.md)
- [trigger_command](./trigger_command.md)