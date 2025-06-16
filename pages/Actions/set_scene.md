---
layout: page
title: Set Scene
parent: Actions
permalink: /actions/set_scene/
---

## Set Scene

Draws shapes in the editor or playback scene. Helpful for custom tools and renders.

### Syntax

```js
Actions.setScene(scene, type);
```

### Parameters

`scene: Millions.Scene`

A WebGL [Millions]({{ site.baseurl }}{% link pages/Globals/millions.md %}) scene to render.

`type?: number`

The scene to replace, where 0 is edit and 1 is playback. Defaults to edit.

### Examples

Draw a rainbow triangle at the origin in the edit scene.

```js
Actions.setScene(
  Millions.Scene.fromEntities([
    new Millions.Triangle(
      {x: 0, y: 0, color: new Millions.Color(255, 0, 0, 255)},
      {x: 10, y: 0, color: new Millions.Color(0, 255, 0, 255)},
      {x: 10, y: 10, color: new Millions.Color(0, 0, 255, 255)},
      0,
      1
    )
  ])
)
```

Clear the edit scene.

```js
Actions.setScene(new Millions.Scene());
```
