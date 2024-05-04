---
layout: page
title: Keyframes
parent: Externals
permalink: /externals/keyframes/
---

## Timestamp

Timestamp property used in keyframes.

`frames:number | [seconds:number, frames:number] | [minutes:number, seconds:number, frames:number]`\
Data forms of timestamps.

## Zoom Keyframe

Array representing a zoom keyframe.

`[timestamp: Timestamp, zoom: number]`\
Data forms of zoom keyframe.

## Camera Bounds Keyframe

Array representing a camera panning keyframe.

`[timestamp: Timestamp, bounds: {width: number, height: number, x: number, y: number}]`\
Data form of camera pan keyframe.

## Camera Focuser Keyframe

Array representing a camera focuser keyframe.

`[timestamp: Timestamp, weights: Array.<number>]`\
Data form of camera focuser keyframe.

## Time Remap Keyframe

Array representing a time remapping keyframe.

`[timestamp: Timestamp, speed: number]`\
Data form of time remap keyframe.
