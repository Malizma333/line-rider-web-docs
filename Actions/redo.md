## Description

### Syntax

```javascript
store.dispatch({ type: "REDO" });
```

### Parameters

None

### Effects

Steps forward engine state from last undo state in history if available.

## Related

- [commit_track_changes](./commit_track_changes.md)
- [revert_track_changes](./revert_track_changes.md)
- [undo](./undo.md)
