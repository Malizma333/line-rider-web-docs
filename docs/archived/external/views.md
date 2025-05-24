---
title: Views
parent: Externals
---

## Current View

Information about what the current ui view looks like.

### Properties

`About: ?string`\
Which part of the `About` page is open.

`Main: ?string`\
Which part of the `Main` view is open.

`Sidebar: ?string`\
Which part of the `Sidebar` is open.

`TrackLoader: ?string`\
Which part of the `TrackLoader` is open.

`TrackSaver: ?string`\
Which part of the `TrackSaver` is open.

`VideoExporter: ?string`\
Which part of the `VideoExporter` is open.

`ReleaseNotes: ?string`\
Which part of the `ReleaseNotes` is open.

## View

Available options for the current view.

### Properties

`Main?: string`
- `"editor"` - The track editor page
- `"viewer"` - The track viewer page
- `"editable-viewer"` - The track viewer page with live editing

`Sidebar?: string`
- `"share"` - The share sidebar
- `"info"` - The track info sidebar
- `"settings"` - The settings menu sidebar
- `"help"` - The help sidebar

`TrackLoader?: string`
- `"load"` - The load screen

`TrackSaver?: string`
- `"load"` - The save screen

`VideoExporter?: string`
- `"export"` - The video export screen

`ReleaseNotes?: string`
- `"notes"` - The release notes screen
