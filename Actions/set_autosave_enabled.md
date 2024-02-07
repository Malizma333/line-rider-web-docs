## Description

### Syntax

```javascript
store.dispatch({ type: "SET_AUTOSAVE_ENABLED", payload: enabled });
```

### Parameters

`enabled`

Whether or not autosave should be enabled.

### Effects

Enables or disables autosaving.

### Returns

None

## Examples

Disable autosave.

```javascript
store.dispatch({ type: "SET_AUTOSAVE_ENABLED", payload: false });
```

## Related

- [load_autosave](./load_autosave.md)
