---
layout: page
title: Editor Position
parent: Selectors
permalink: /selectors/editor_position/
---

## Editor Position

Returns a [`V2`]({{ site.baseurl }}{% link pages/External/primitives.md %}) describing where the editor camera is located.

### Syntax

```js
function getEditorPosition(state) {
  return state.camera.editorPosition;
}
```

### Related

- [editor_dimensions](./editor_dimensions.md)
- [editor_follower_focus](./editor_follower_focus.md)
- [editor_zoom](./editor_zoom.md)
