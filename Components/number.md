## Description

Creates a number picker with a label and optional slider that writes to a target `number` state.

### Syntax

```js
renderNumberPicker (key, label, range, step, forInt = false, slider = false) {
  const parseCatch = (x) => isNaN(x) ? this.state[key] : x;
  const settings = {
    min: range[0],
    max: range[1],
    step,
    value: this.state[key],
    onChange: e => this.setState({ [key]: parseCatch(
      forInt ? parseInt(e.target.value) : parseFloat(e.target.value)
    ) })
  };

  return React.createElement("div", null,
    label,
    React.createElement("input", { style: { width: "4em" }, type: "number", ...settings }),
    slider && React.createElement("input", { type: "range", ...settings, onFocus: e => e.target.blur() })
  );
}
```

### Parameters

`key`

The key `string` of the state value that this number picker affects.

`label`

The `string` of text for a label displayed next to the number picker.

`range`

An `array` of length 2 representing the range that the number picker accepts, inclusive.

`step`

A `number` indicating the discrete step values that this picker changes by.

`forInt?`

A `boolean` indicating whether to parse the number as an integer instead of a float. This value is `false` by default.

`slider?`

A `boolean` indicating whether to add an additional slider next to the number picker. This value is `false` by default.

## Examples

Render a number picker for an angle value in degrees.

```js
this.renderNumberPicker('angle', 'Angle', [0, 360], 0.1);
```

Render a number picker and slider for picking an integer between 0 and 10, exclusive.

```js
this.renderNumberPicker('num', 'My Number', [1,9], 1, forInt = true, slider = true);
```
