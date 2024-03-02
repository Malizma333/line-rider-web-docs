## Description

Returns [LineBase[]](../External/templates.js) buffer describing the uncommitted track lines.

### Syntax

```js
function getSimulatorLines(state) {
  return state.simulator.engine.linesList;
}
```

## Related

- [simulator_committed_lines](./simulator_committed_lines.md)
- [simulator_track](./simulator_track.md)