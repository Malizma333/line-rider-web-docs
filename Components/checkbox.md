## Description

Creates a checkbox with a label that toggles a target `boolean` state.

### Syntax

```js
renderCheckbox (key, label) {
  const settings = {
    checked: this.state[key],
    onChange: e => this.setState({ [key]: e.target.checked })
  };

  return React.createElement("div", null,
    label+' ',
    React.createElement("input", { type: "checkbox", ...settings })
  );
}
```

### Parameters

`key`

The key `string` of the state value that this checkbox toggles.

`label`

The `string` of text for a label displayed next to the checkbox.

## Examples

Create a checkbox for the `flipLines` state.

```js
this.renderCheckbox('flipLines', 'Flip Lines')
```
