---
title: Audio
parent: Externals
---

## Audio Data

Stores data related to loaded audio files.

### Properties

`enabled: boolean`\
Indicates whether or not audio is enabled.

`name?: string`\
Name of the audio file.

`offset: number`\
Offset to start playing the audio from.

`path?: string`\
Path to the audio file.

`volume: number`\
Volume that the audio plays back at.

## Audio Fragment

Partial audio data used in save information

### Properties

`name?: string`\
Name of the audio file.

`offset: number`\
Offset to start playing the audio from.

`path?: string`\
Path to the audio file.

## Audio Loader

Loading status of the audio.

### Properties

`error?: string`\
Error that occurred in loading the audio file.

`loadingFile: boolean`\
Whether or not the audio loader is currently in progress.