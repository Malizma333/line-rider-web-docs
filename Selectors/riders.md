## Description

Returns [Rider[]](../External/templates.js) buffer describing the uncommitted track riders.

### Syntax

```js
function getRiders(state) {
  return state.simulator.engine.engine.state.riders;
}
```

## Related

- [committed_riders](./committed_riders.md)
- [simulator_track](./simulator_track.md)
