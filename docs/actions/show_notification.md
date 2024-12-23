---
title: Show Notification
parent: Actions
---

## Show Notification

Displays a notification message in the top right.

### Syntax

```js
store.dispatch({ type: "notifications/SHOW_NOTIFICATION", payload: { message, autoHide } });
```

### Parameters

`message`

The notification message to display

`autohide`

A boolean indicating whether the notification hides after a certain period of time

### Examples

Displays the message "Hello, world!".

```js
store.dispatch({
  type: "notifications/SHOW_NOTIFICATION",
  payload: { message: "Hello, world!", autoHide: true }
});
```

### Related

- [hide_notification](./hide_notification.md)
