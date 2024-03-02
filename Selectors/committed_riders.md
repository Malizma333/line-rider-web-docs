## Description

Returns [Rider[]](https://github.com/Malizma333/line-rider-web-docs/blob/main/External/templates.js#L183-L190) buffer describing the committed track riders.

### Syntax

```js
function getCommittedRiders(state) {
  return state.simulator.committedEngine.engine.state.riders;
}
```

## Related

- [riders](./riders.md)
- [simulator_committed_track](./simulator_committed_track.md)
