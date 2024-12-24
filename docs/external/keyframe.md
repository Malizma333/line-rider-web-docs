---
title: Keyframes
parent: Externals
---

## Timestamp

Timestamp property used in keyframes.

`frames: number | [seconds: number, frames: number] | [minutes: number, seconds: number, frames: number]`\

## Zoom Keyframe

Array representing a zoom keyframe.

`[timestamp: Timestamp, zoom: number]`

## Camera Bounds Keyframe

Array representing a camera panning keyframe.

`[timestamp: Timestamp, bounds: {width: number, height: number, x: number, y: number}]`

## Camera Focuser Keyframe

Array representing a camera focuser keyframe.

`[timestamp: Timestamp, weights: Array.<number>]`

## Time Remap Keyframe

Array representing a time remapping keyframe.

`[timestamp: Timestamp, speed: number]`
