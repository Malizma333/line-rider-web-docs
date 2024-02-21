## Description

### Syntax

```javascript
store.dispatch({ type: "REVERT_TRACK_CHANGES", meta: { ignorable: true } });
```

### Parameters

None

### Effects

Clears track changes from uncommitted engine state.

## Related

- [commit_track_changes](./commit_track_changes.md)
- [redo](./redo.md)
- [undo](./undo.md)
