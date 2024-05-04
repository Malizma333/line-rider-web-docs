---
layout: page
title: Revert Track Changes
parent: Actions
permalink: /actions/revert_track_changes/
---

## Description

Clears track changes from uncommitted engine state.

### Syntax

```js
store.dispatch({ type: "REVERT_TRACK_CHANGES", meta: { ignorable: true } });
```

## Related

- [commit_track_changes](./commit_track_changes.md)
- [redo](./redo.md)
- [undo](./undo.md)
