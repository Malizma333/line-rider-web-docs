## Description

Returns [LineBase[]](../External/templates.js) buffer describing the committed track lines.

### Syntax

```js
function getSimulatorCommittedLines(state) {
  return state.simulator.committedEngine.linesList;
}
```

## Related

- [simulator_lines](./simulator_lines.md)
- [simulator_committed_track](./simulator_committed_track.md)
