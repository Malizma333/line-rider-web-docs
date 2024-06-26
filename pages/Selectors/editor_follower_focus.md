---
layout: page
title: Editor Focuser
parent: Selectors
permalink: /selectors/editor_follower_focus/
---

## Editor Focuser

Returns a `number` describing which rider is being followed by the editor camera.

### Syntax

```js
function getEditorFollowerFocus(state) {
  return state.camera.editorFollowerFocus;
}
```

### Related

- [editor_dimensions](./editor_dimensions.md)
- [editor_position](./editor_position.md)
- [editor_zoom](./editor_zoom.md)
- [playback_follower_focus](./playback_follower_focus.md)
- [use_editor_follower](./use_editor_follower.md)
