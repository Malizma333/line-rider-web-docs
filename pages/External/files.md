---
layout: page
title: Files
parent: Externals
permalink: /externals/files/
---

## Derived From

Stores data indicating where a track originated from.

### Properties

`creator: string`\
Creator of the target track.

`title: string`\
Title of the target track.

`version: "6.1" | "6.2"`\
Physics version of the target track.

## Cloud Info

Information about a cloud save.

### Properties

`derivativeKey: string`\
Hash related to the track derivation.

`derivedFrom: DerivedFrom`\
Where the track derived from.

`masterKey: string`\
Hash for the overall cloud save.

`saveTime: number`\
When the track was saved.

`trackId: number`\
Id of the track in the save database.

`versionTitle: string`\
What version the track originates from.

`versionId: string`\
Id of the version the track originates from.

## Cloud Save

Data needed to save tracks to the cloud.

### Properties

`cloudInfo: CloudInfo`\
Information about the cloud save.

`details: TrackDetails`\
Details about the track being saved.

## Progress

Progress for saving, loading, and autosaving threads.

### Properties

`error?: string`\
Error that ocurred in the save/load process.

`percent?: true | number`\
How far along the save/load process is.

`status?: boolean`\
Whether or not the save/load was completed.