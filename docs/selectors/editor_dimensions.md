---
title: Editor Dimensions
parent: Selectors
---

## Editor Dimensions

Returns [`Dimensions`]({{ site.baseurl }}{% link docs/external/camera.md %}) describing the viewport of the editor camera.

### Syntax

```js
function getEditorDimensions(state) {
  return state.camera.editorDimensions;
}
```

### Related

- [editor_follower_focus](./editor_follower_focus.md)
- [editor_position](./editor_position.md)
- [editor_zoom](./editor_zoom.md)
- [playback_dimensions](./playback_dimensions.md)
