---
layout: page
title: Set View
parent: Actions
permalink: /actions/set_views/
---

## Set View

Opens a specific UI menu area based on the name of the menu and the view object parameters.

### Syntax

```js
store.dispatch({ type: "SET_VIEWS", payload: views, meta: { name, auto: false } });
```

### Parameters

`views`

A [`View`]({{ site.baseurl }}{% link pages/external/views.md %}) object that specifies which view to open.

`name`

The type of view action to execute. A list of available view actions can be found [here]({{ site.baseurl }}{% link pages/external/views.md %}).

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
