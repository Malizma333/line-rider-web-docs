/**
* @typedef {{
*   creator: string
*   title: string
*   version: "6.1" | "6.2"
* }} DerivedFrom
*/

/** Primary cloud save properties
* @typedef {{
*   derivativeKey: string
*   derivedFrom: DerivedFrom
*   masterKey: string
*   saveTime: number
*   trackId: number
*   versionTitle: string
*   versionId: string
* }} CloudInfo
*/

/**
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
* }} CloudSave
*/