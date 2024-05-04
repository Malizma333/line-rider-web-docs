---
layout: page
title: Undo
parent: Actions
permalink: /actions/undo/
---

## Undo

Steps back engine state to previous state in history if available.

### Syntax

```js
store.dispatch({ type: "UNDO" });
```

### Related

- [commit_track_changes](./commit_track_changes.md)
- [revert_track_changes](./revert_track_changes.md)
- [redo](./redo.md)
