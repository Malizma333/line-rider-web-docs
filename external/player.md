---
layout: page
title: Player
parent: Externals
---

## Player Settings

Settings for the playback timeline.

### Properties

`baseRate?: number`\
Base rate at which the player plays the track.

`fastForward?: number`\
Fast forward rate at which the player plays the track.

`fps?: number`\
Framerate of the timeline.

`interpolate?: boolean | number`\
Whether the player interpolates between frames or by how much.

`maxDuration?: number`\
Max duration of the timeline.

`slowMotion?: number`\
Slow motion rate at which the player plays the track.

## View Options

List of options for the track viewer.

```js
[
  "showViewport",
  "showVisibleAreas",
  "playbackPreview",
  "colorPlayback",
  "flag",
  "millionsEnabled",
  "onionSkin"
]
```