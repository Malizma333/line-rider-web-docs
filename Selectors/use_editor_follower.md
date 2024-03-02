## Description

Returns a `boolean` indicating whether the editor camera should keep the rider in view while scrubbing.

### Syntax

```js
function getUseEditorFollower(state) {
  return state.settings["cam.useEditorFollower"];
}
```

## Related

- [editor_follower_focus](./editor_follower_focus.md)
- [playback_follower_focus](./playback_follower_focus.md)
