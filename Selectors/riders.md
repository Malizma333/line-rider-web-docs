## Description

Returns a [Rider[]](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L183-L190) buffer describing the uncommitted track riders.

### Syntax

```js
function getRiders(state) {
  return state.simulator.engine.engine.state.riders;
}
```

## Related

- [committed_riders](./committed_riders.md)
- [simulator_track](./simulator_track.md)
