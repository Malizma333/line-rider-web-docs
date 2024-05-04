---
layout: page
title: Track
parent: Externals
permalink: /externals/track/
---

## Track

Full track data.

### Properties

`audio?: AudioDataFragment`\
Information about the audio file.

`creator?: string`\
Creator of the track.

`description?: string`\
Description of the track.

`duration?: number`\
Duration of the track.

`label?: string`\
Title of the track.

`layers?: Layer[]`\
Array of track layers.

`lines?: Line[]`\
Array of track lines.

`riders?: Rider[]`\
Array of track riders.

`script?: string`\
Track script.

`startPosition?: V2`\
Start position of the track.

`version: "6.1" | "6.2"`\
Physics version of the track.

`viewOnly?: boolean`\
Whether the track is editable.

## Track Save

Partial track data used for saving.

### Properties

`audio?: AudioDataFragment`\
Information about the audio file.

`layers?: Layer[]`\
Array of track layers.

`lines?: Line[]`\
Array of track lines.

`riders?: Rider[]`\
Array of track riders.

`script?: string`\
Track script.

`version: "6.1" | "6.2"`\
Physics version of the track.
