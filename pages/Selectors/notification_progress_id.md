---
layout: page
title: Notification Progress Id
parent: Selectors
permalink: /selectors/notification_progress_id/
---

## Notification Progress Id

Returns a `string` describing the notification progress id, if available.

### Syntax

```js
function getNotificationProgressId(state) {
  return state.notifications.progressId;
}
```

### Related

- [notification_count](./notification_count.md)
