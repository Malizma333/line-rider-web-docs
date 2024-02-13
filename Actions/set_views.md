## Description

### Syntax

```javascript
store.dispatch({ type: "SET_VIEWS", payload: views, meta: { name, auto: false } });
```

### Parameters

`views`

A view object that defines what view to open. The structure of a view object can be found [here](./view_template.js).

`name`

The type of view action to execute. A list of available view actions can be found [here](./view_actions.json).

### Effects

Opens a specific UI menu area based on the name of the menu and the view object parameters.

### Returns

None

## Examples

Opens the editor view.

```javascript
store.dispatch({
  type: "SET_VIEWS",
  payload: { "Main": "editor", "About": null, "TrackLoader": null },
  meta: { name: "ENTER_EDITOR", auto: false }
});
```

Toggles the sidebar settings page.

```javascript
store.dispatch({
  type: "SET_VIEWS",
  payload: { "Sidebar": "settings" },
  meta: { name: "SET_SIDEBAR_PAGE", auto: false }
});
```

Closes the sidebar.

```javascript
store.dispatch({
  type: "SET_VIEWS",
  payload: { "Sidebar": null },
  meta: { name: "SET_SIDEBAR_PAGE", auto: false }
});
```

## Related
