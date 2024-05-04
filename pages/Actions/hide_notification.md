---
layout: page
title: Hide Notification
parent: Actions
permalink: /actions/hide_notification/
---

## Description

Hides a notification based on its message.

### Syntax

```js
store.dispatch({ type: "notifications/HIDE_NOTIFICATION", payload: message });
```

### Parameters

`message`

The message of the notification to hide.

## Examples

Hides the notification with the message "Hello, world!".

```js
store.dispatch({
  type: "notifications/HIDE_NOTIFICATION",
  payload: "Hello, world!"
});
```

## Related

- [show_notification](./show_notification.md)
