---
layout: page
title: Custom Rider Skins
parent: Globals
permalink: /globals/set_custom_riders/
---

## Custom Rider Skins

Styles each rider based on an array of string formatted CSS styles. Index 1 represents the style of the first rider, index 2 represents the style of the second rider, and so on, until it wraps back around to index 0.

### Syntax

```js
setCustomRiders([css_string, ...])
```

### Parameters

`css_string`

A string that gets parsed into css representing the styles to apply to the rider at the appropriate index.

### Examples

Alternates solid red and solid green scarf colors among each rider.

```js
setCustomRiders([
  ".scarfOdd{fill:red} .scarfEven{fill:red}",
  ".scarfOdd{fill:green} .scarfEven{fill:green}"
])
```

Logs a list of CSS properties available to the console.

```js
setCustomRiders.parts
```
