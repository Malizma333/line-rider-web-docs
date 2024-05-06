---
layout: page
title: Editor Dimensions
parent: Selectors
permalink: /selectors/editor_dimensions/
---

## Editor Dimensions

Returns [`Dimensions`]({{ site.baseurl }}{% link pages/External/camera.md %}) describing the viewport of the editor camera.

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
