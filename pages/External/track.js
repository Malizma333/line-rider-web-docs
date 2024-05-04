/** Full track data
* @typedef {{
*   audio?: AudioDataFragment
*   creator?: string
*   description?: string
*   duration?: number
*   label?: string
*   layers?: Layer[]
*   lines?: Line[]
*   riders?: Rider[]
*   script?: string
*   startPosition?: {x: number, y: number}
*   version: "6.1" | "6.2"
*   viewOnly?: boolean
* }} Track
*/

/** Partial track data used in save formats
* @typedef {{
*   audio: AudioDataFragment
*   layers: {buffer: Layer[]}
*   riders: {buffer: Rider[]}
*   script: string
*   version: "6.1" | "6.2"
* }} TrackFragment
*/