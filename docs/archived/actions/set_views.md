---
title: Set View
parent: Actions
---

## Set View

Opens a specific UI menu area based on the name of the menu and the view object parameters.

### Syntax

```js
store.dispatch({ type: "SET_VIEWS", payload: views, meta: { name, auto: false } });
```

### Parameters

`views`

A [`View`]({{ site.baseurl }}{% link docs/external/views.md %}) object that specifies which view to open.

`name`

## View Actions

List of available actions to interact with the current view.

"SET_SIDEBAR_PAGE"
"CLOSE_SIDEBAR"
"ENTER_VIEWER"
"ENTER_EDITABLE_VIEWER"
"CLOSE_LOAD_SCREEN"
"ENTER_EDITOR"
"OPEN_SETTING_SIDEBAR"
"OPEN_HELP_SIDEBAR"
"OPEN_INFO_SIDEBAR"
"OPEN_TRACK_LOADER"
"CLOSE_TRACK_LOADER"
"SWITCH_FROM_TRACK_LOADER_TO_EDITOR"
"OPEN_TRACK_SAVER"
"CLOSE_TRACK_SAVER"
"OPEN_SIDEBAR_SHARE_PAGE"
"OPEN_VIDEO_EXPORTER"
"CLOSE_VIDEO_EXPORTER"
"OPEN_RELEASE_NOTES"
"CLOSE_RELEASE_NOTES"

### Examples

Opens the editor view.

```js
store.dispatch({
  type: "SET_VIEWS",
  payload: { "Main": "editor", "About": null, "TrackLoader": null },
  meta: { name: "ENTER_EDITOR", auto: false }
});
```

Toggles the sidebar settings page.

```js
store.dispatch({
  type: "SET_VIEWS",
  payload: { "Sidebar": "settings" },
  meta: { name: "SET_SIDEBAR_PAGE", auto: false }
});
```

Closes the sidebar.

```js
store.dispatch({
  type: "SET_VIEWS",
  payload: { "Sidebar": null },
  meta: { name: "SET_SIDEBAR_PAGE", auto: false }
});
```

### Related
