## Description

Returns [LineBase[]](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L141-L158) buffer describing the uncommitted track lines.

### Syntax

```js
function getSimulatorLines(state) {
  return state.simulator.engine.linesList;
}
```

## Related

- [simulator_committed_lines](./simulator_committed_lines.md)
- [simulator_track](./simulator_track.md)
