---
layout: page
title: Command Counts
parent: Selectors
permalink: /selectors/trigger_counts/
---

## Command Counts

Returns a `number` describing the count of a target trigger being pressed.

### Syntax

```js
function getTriggerCounts(state, trigger) {
  return state.command.triggerCounts.get(trigger, 0);
}
```

### Parameters

`trigger`

The target trigger to retrieve the pressed count of. A full list of available command ids can be found [here]({{ site.baseurl }}{% link pages/external/commands.md %}).

### Examples

Returns the number of times the undo hotkey has been pressed.

```js
getModifier(
  store.getState(),
  "triggers.undo"
)
```

### Related

- [modifiers](./modifiers.md)
- [modifiers_active](./modifiers_active.md)
