## Description

Creates an automated layer function based on layer ids and frame indices.

### Syntax

```js
getLayerVisibleAtTime = (id, ind) => {}
```

### Parameters

`id`

A `number` describing the id of the layer to show/hide. The parameter itself is not based on the index of the layer in the layer array.

`index`

A `number` describing which frame is being checked.

### Returns

A `boolean` indicating whether the layer of the specified id should be visible at the specified index.

## Examples

Shows layer 1 after 1 second and toggles layer 2 every 5 frames.

```js
getLayerVisibleAtTime = (id, ind) => {
  /** Boilerplate to convert layer id to index */
  if (!window.idToIndex) { 
    window.idToIndex = []

    const getSimulatorTrack = (state) => state.simulator.engine
    const getTrackLayers = (state) => getSimulatorTrack(state).engine.state.layers

    for (let [i, layer] of [
      ...getTrackLayers(window.store.getState()),
    ].entries()) {
      window.idToIndex[layer.id] = i
    }
  }
  
  id = window.idToIndex[id]
  /** End of boilerplate */

  if(id === 1) {
    return ind > 40
  }

  if(id === 2) {
    return ind % 10 < 5
  }

  return true;
}
```

## Related
