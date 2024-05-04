## Description

Creates a button with a label that triggers a target `function`.

### Syntax

```js
renderButton (key, label, event) {
  return React.createElement('button', { onClick: () => {key ? event(key) : event()} }, label);
}
```

### Parameters

`key?`

The key `string` of the state value that this button affects.

`label`

The `string` of text for a label displayed inside the button.

`event`

A `function` that affects the state based on the key value provided.

## Examples

Create a button for toggling the mod.

```js
onActivate () {
  this.setState({ active: !active })
}
...
this.renderButton('active', 'My Mod', this.onActivate);
```

Create a button for committing track changes.

```js
onCommit () {
  this.mod.commit();
  this.setState({ active: false });
}
...
this.renderButton(null, 'Commit', this.onCommit);
```
