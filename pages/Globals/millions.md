---
layout: page
title: Millions
parent: Globals
permalink: /globals/millions/
---

## Millions

Utilities for rendering entities via WebGL. The two scenes exposed by the api, playback and edit, correspond to the whatever is drawn during playback and guidelines drawn for tools, respectively.

In terms of draw order, the playback scene renders under the rider, and the tool/edit scene renders over the rider. However, both render under the skeleton. Something else to note is that Layer 0 (scene layers, not in-game layers) is reserved for both of these scenes, because that is what tools and playback both default to. So don't override this layer if you want to draw things.

The layering system is done such that draw order is sorted by layers, then by z-index. Higher layers and higher z-indices are drawn above lower ones. It is important that no two entities share the exact same layer and z-index.

### Scene

A place to draw entities. The quickest way to draw entities is by using `Scene.fromEntities`.

```js
Millions.Scene.fromEntities([entity, ...])
```

Each entity in this array corresponds to one of the following types of entities (examples found below).

### Entities

#### Line

Creates a vertical green line.

```js
new Millions.Line(
  {
    x: 0,
    y: 0,
    colorA: Millions.Color.fromRGBA(0, 255, 0, 255),
    colorB: Millions.Color.fromRGBA(0, 255, 0, 255),
    thickness: 1,
    cap: Millions.LineCaps.LINECAP_TYPE_ROUNDED
  },
  {
    x: 0,
    y: 20,
    colorA: Millions.Color.fromRGBA(0, 255, 0, 255),
    colorB: Millions.Color.fromRGBA(0, 255, 0, 255),
    thickness: 1,
    cap: Millions.LineCaps.LINECAP_TYPE_NONE
  },
  1,
  0
)
```

#### Triangle

Create a blue right triangle.

```js
new Millions.Triangle(
  { x: 0, y: 0, color: Millions.Color.fromRGBA(0, 0, 255, 255) },
  { x: 10, y: 0, color: Millions.Color.fromRGBA(0, 0, 255, 255) },
  { x: 10, y: -10, color: Millions.Color.fromRGBA(0, 0, 255, 255) },
  1,
  0
)
```

### Color

Millions supports colors with red, green, blue, and alpha values, ranging from 0 to 255. Below are some helper functions to quickly create colors.

Create a new color from red, green, blue values.

```js
Millions.Color.fromRGB(0, 0, 0)
```

Create a new color with alpha.

```js
Millions.Color.fromRGBA(0, 0, 0, 255)
```
