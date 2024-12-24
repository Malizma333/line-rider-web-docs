---
title: Modifier Active
parent: Selectors
---

## Modifier Active

Returns a `boolean` indicating if the target modifier is active.

### Syntax

```js
function getModifier(state, modifier) {
  return state.command.activeModifiers.has(modifier);
}
```

### Parameters

`modifier`

The target modifier that may be active. A full list of available command ids can be found [here]({{ site.baseurl }}{% link docs/external/commands.md %}).

### Examples

Returns whether the fast forward hotkey is currently active.

```js
getModifier(
  store.getState(),
  "modifiers.fastForward"
)
```

### Related

- [modifiers_active](./modifiers_active.md)
- [trigger_counts](./trigger_counts.md)