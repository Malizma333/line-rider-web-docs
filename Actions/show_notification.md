## Description

### Syntax

```javascript
store.dispatch({ type: "notifications/SHOW_NOTIFICATION", payload: { message, autoHide } });
```

### Parameters

`message`

The notification message to display

`autohide`

Whether or not the notification hides after a certain period of time

### Effects

Displays a notification message in the top right.

## Examples

Display the message "Hello, world!".

```javascript
store.dispatch({
  type: "notifications/SHOW_NOTIFICATION",
  payload: { message: "Hello, world!", autoHide: true }
});
```

## Related

- [hide_notification](./hide_notification.md)
