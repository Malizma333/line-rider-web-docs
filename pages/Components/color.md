## Description

Creates a color picker with a label that writes to a target `string` state.

### Syntax

```js
renderColorPicker (key, label) {
  const settings = {
    value: this.state[key],
    onChange: e => this.setState({ [key]: e.target.value })
  };

  return React.createElement("div", null,
    label+' ',
    React.createElement("input", { type: "color", style: {width: '2em'}, ...settings })
  );
}
```

### Parameters


`key`

The key `string` of the state value that this color picker changes.

`label`

The `string` of text for a label displayed next to the color picker.

## Examples

Creates a color picker for the `scarfColor` state.

```js
this.renderCheckbox('scarfColor', 'Scarf Color')
```
