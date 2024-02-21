## Description

### Syntax

```javascript
store.dispatch({ type: "TOGGLE_SETTING", payload: { key } });
```

### Parameters

`key`

Id of the target setting to toggle. The only available setting for web is `'cam.useEditorFollower'`. The other settings available are mobile-exclusive.

### Effects

Toggles the target setting given the key.

## Examples

Toggle whether the editor camera keeps the rider in view while scrubbing.

```javascript
store.dispatch({
  type: "TOGGLE_SETTING",
  payload: { key: 'cam.useEditorFollower' }
});
```

## Related
