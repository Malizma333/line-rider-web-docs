---
layout: page
title: Modifiers Are Active
parent: Selectors
permalink: /selectors/modifiers_active/
---

## Modifiers Are Active

Returns a `boolean` indicating whether there is any active modifiers.

### Syntax

```js
function getModifiersActive(state) {
  return !state.command.activeModifiers.isEmpty();
}
```

### Related

- [modifiers](./modifiers.md)
- [trigger_counts](./trigger_counts.md)
