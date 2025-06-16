---
layout: page
title: Add Layer
parent: Actions
permalink: /actions/add_layer/
---

## Add Layer

Creates a new layer or layer folder in the uncommitted engine.

### Syntax

```js
Actions.addLayer(name, type)
```

### Parameters

`name?: string`

The name of the newly created layer.

`type?: number`

The type of layer to add, where 0 is a layer and 1 is a folder. Defaults to layer.

### Returns

A `number` corresponding to the id of the layer.
