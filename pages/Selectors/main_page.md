---
layout: page
title: Main Page
parent: Selectors
permalink: /selectors/main_page/
---

## Main Page

Returns nullable `string` describing which part of the main page is open.

### Syntax

```js
function getMainPage(state) {
  return state.views["Main"];
}
```

### Related

- [sidebar_page](./sidebar_page.md)
- [views](./views.md)
