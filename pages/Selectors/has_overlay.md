---
layout: page
title: Has Overlay
parent: Selectors
permalink: /selectors/has_overlay/
---

## Description

Returns a nullable `string` indicating which window overlay is active.

### Syntax

```js
function getHasOverlay(state) {return (
  state.views["About"] ||
  state.views["TrackLoader"] ||
  state.views["TrackSaver"] ||
  state.views["VideoExporter"] ||
  state.views["ReleaseNotes"]
);}
```

## Related

- [controls_active](./controls_active.md)
- [in_editor](./in_editor.md)
- [in_track_loader](./in_track_loader.md)
- [in_track_saver](./in_track_saver.md)
- [in_video_exporter](./in_video_exporter.md)
- [in_viewer](./in_viewer.md)
- [views](./views.md)
