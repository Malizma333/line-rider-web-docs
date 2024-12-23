---
layout: page
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

## View Actions

List of available actions to interact with the current view.

```js
[
  "SET_SIDEBAR_PAGE",
  "CLOSE_SIDEBAR",
  "ENTER_VIEWER",
  "ENTER_EDITABLE_VIEWER",
  "CLOSE_LOAD_SCREEN",
  "ENTER_EDITOR",
  "OPEN_SETTING_SIDEBAR",
  "OPEN_HELP_SIDEBAR",
  "OPEN_INFO_SIDEBAR",
  "OPEN_TRACK_LOADER",
  "CLOSE_TRACK_LOADER",
  "SWITCH_FROM_TRACK_LOADER_TO_EDITOR",
  "OPEN_TRACK_SAVER",
  "CLOSE_TRACK_SAVER",
  "OPEN_SIDEBAR_SHARE_PAGE",
  "OPEN_VIDEO_EXPORTER",
  "CLOSE_VIDEO_EXPORTER",
  "OPEN_RELEASE_NOTES",
  "CLOSE_RELEASE_NOTES"
]
```