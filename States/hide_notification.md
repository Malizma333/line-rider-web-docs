## Description

### Syntax

```javascript
store.dispatch({ type: "notifications/HIDE_NOTIFICATION", payload: message });
```

### Parameters

`message`

The message of the notification to hide.

### Effects

Hides a notification based on its message.

## Examples

Hide the notification with the message "Hello, world!".

```javascript
store.dispatch({
  type: "notifications/HIDE_NOTIFICATION",
  payload: "Hello, world!"
});
```

## Related

- [show_notification](./show_notification.md)
