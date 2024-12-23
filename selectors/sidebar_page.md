---
layout: page
title: Sidebar Page
parent: Selectors
---

## Sidebar Page

Returns nullable `string` describing which part of the sidebar page is open.

### Syntax

```js
function getSidebarPage(state) {
  return state.views["Sidebar"];
}
```

### Related

- [main_page](./main_page.md)
- [views](./views.md)
