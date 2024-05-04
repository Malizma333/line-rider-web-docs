---
layout: page
title: Text Field
parent: Components
permalink: /components/text/
---

## Description

Creates a text field with a label that writes to a target `string` state.

### Syntax

```js
renderTextbox (key, label) {
  const settings = {
    value: this.state[key],
    onChange: e => this.setState({ [key]: e.target.value })
  };

  return React.createElement("div", null,
    label+'\n',
    React.createElement("input", { type: "text", ...settings })
  );
}
```

### Parameters

`key`

The key `string` of the state value that this textbox changes.

`label`

The `string` of text for a label displayed next to the textbox.

## Examples

Creates a textbox for the `userText` state.

```js
this.renderCheckbox('userText', 'Text Here:')
```
