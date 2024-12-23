---
layout: page
title: Views
parent: Selectors
permalink: /selectors/views/
---

## Views

Returns [`CurrentViews`]({{ site.baseurl }}{% link pages/external/views.md %}) describing which views are currently active

### Syntax

```js
function getViews(state) {
  return state.views;
}
```

### Related

- [controls_active](./controls_active.md)
- [has_overlay](./has_overlay.md)
- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [in_viewer](./in_viewer.md)
- [main_page](./main_page.md)
- [sidebar_page](./sidebar_page.md)
