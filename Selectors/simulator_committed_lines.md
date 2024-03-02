## Description

Returns [LineBase[]](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L141-L158) buffer describing the committed track lines.

### Syntax

```js
function getSimulatorCommittedLines(state) {
  return state.simulator.committedEngine.linesList;
}
```

## Related

- [simulator_lines](./simulator_lines.md)
- [simulator_committed_track](./simulator_committed_track.md)
