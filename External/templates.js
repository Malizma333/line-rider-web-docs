/**
* @typedef {{
*   enabled: boolean
*   name: ?string
*   offset: number
*   path: ?string
*   volume: number
* }} AudioData
*/

/** Partial audio data used in saves
* @typedef {{
*   name: ?string
*   offset: number
*   path: ?string
* }} AudioDataFragment
*/

/**
* @typedef {{
*   error: ?string
*   loadingFile: boolean
* }} AudioLoader
*/

/** Data important to autosaving
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
*   info: {duration: number}
*   localFile: boolean
*   props: TrackFragment
* }} AutosaveData
*/

/** Camera position and zoom properties
* @typedef {{
*   position: V2
*   zoom: number
* }} Camera
*/

/** Cloud base properties
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

/** Cloud save peroperties
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
* }} CloudSave
*/

/** Current ui view state
* @typedef {{
*   "About"?: string
*   "Main"?: string
*   "Sidebar"?: string
*   "TrackLoader"?: string
*   "TrackSaver"?: string
* }} CurrentViews
*/

/** Cloud derived properties
* @typedef {{
*   creator: string
*   title: string
*   version: "6.1" | "6.2"
* }} DerivedFrom
*/

/** Camera dimensions
* @typedef {{
*   height: number
*   width: number
* }} Dimensions
*/

/** Editor notification properties
* @typedef {{
*   autoHide: boolean
*   message: string
*   open: boolean
* }} EditorNotification
*/

/** Engine state properties
* @typedef {{
*   _changeCount: number
*   _computed?: Object
*   _locked: boolean
*   _target?: Object
*   linesList: {buffer: LineBase[]}
*   props: Object
*   start: {
*     position: {x: number, y: number}
*     velocity: {x: number, y: number}
*   }
*   state: {
*     activeLayerId: number
*     layers: {buffer: Layer[]}
*     lines: {buffer: Line[]}
*     riders: {buffer: Rider[]}
*   }
* }} Engine
*/

/** Layer properties
* @typedef {{
*   editable: boolean
*   id: number
*   name: string
*   visible: boolean
* }} Layer
*/

/** Basic line properties
* @typedef {{
*   id?: number
*   type: LineType
*   x1: number
*   y1: number
*   x2: number
*   y2: number
*   flipped?: boolean
*   leftExtended?: boolean
*   rightExtended?: boolean
*   multiplier?: number
*   layer?: number
* }} Line
*/

/** Extended line properties
* @typedef {{
*   extension?: number
*   flipped?: boolean
*   id: number
*   invLengthSq?: number
*   layer?: number
*   leftBound?: number
*   leftExtended?: boolean
*   length: number
*   norm: V2
*   p1: V2
*   p2: V2
*   rightBound?: number
*   rightExtended?: boolean
*   vec: V2
* }} LineBase
*/

/** Blue - 0 | Red - 1 | Green - 2
* @typedef { 0 | 1 | 2 } LineType
*/

/** Timeline playback settings
* @typedef {{
*   baseRate?: number
*   fastForward?: number
*   fps?: number
*   interpolate?: boolean | number
*   maxDuration?: number
*   slowMotion?: number
* }} PlayerSettings
*/

/** Progress data for saves/loads 
* @typedef {{
*   error: ?string
*   percent: ?(true | number)
*   status: ?boolean
* }} Progress
*/

/** Rider properties
* @typedef {{
*   remountable: boolean
*   startAngle: number
*   startPosition: {x: number, y: number}
*   startVelocity: {x: number, y: number}
* }} Rider
*/

/** Full track save data
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

/** Fragment of a track used in save data
* @typedef {{
*   audio: AudioDataFragment
*   layers: {buffer: Layer[]}
*   riders: {buffer: Rider[]}
*   script: string
*   version: "6.1" | "6.2"
* }} TrackFragment
*/

/** Tool state
* @typedef {{
*   status: {
*     inactive: boolean
*   }
* }} ToolState
*/

/** Two-dimensional vector
* @typedef {{
*   x: number
*   y: number
* }} V2
*/

/** Camera dimensions and zoom properties
* @typedef {{
*   height: number
*   width: number
*   zoom: number
* }} Viewbox
*/

/** UI view options
* @typedef {{
* "Main"?: "editor" | "viewer" | "editable-viewer"
* "Sidebar"?: "share" | "info" | "settings" | "help"
* "About"?: "launch" | "loading"
* "TrackLoader"?: "load"
* "TrackSaver"?: "save"
* "VideoExporter"?: "export"
* "ReleaseNotes"?: "notes"
* }} ViewObject
*/

/** Renderer view settings
* @typedef {{
*   color: boolean
*   flag: ?boolean
*   skeleton: SkeletonMode
* }} ViewSettings
*/

/** Timestamp used in keyframes
* @typedef {number} frames
* @typedef {number} seconds
* @typedef {number} minutes
* @typedef {frames | [seconds, frames] | [minutes, seconds, frames]} timestamp
*/

/** Zoom keyframe
* @typedef {number} zoom
* @typedef {[
*   timestamp
*   zoom
* ]} Keyframe
*/

/** Camera bounds keyframe
* @typedef {{w: number, h: number, x: number, y: number}} bounds
* @typedef {[
*   timestamp
*   bounds
* ]} CamBoundsKeyframe
*/

/** Camera focuser keyframe
* @typedef {number[]} weights
* @typedef {[
*   timestamp
*   weights
* ]} CamFocusKeyframe
*/

/** Time remap keyframe
* @typedef {number} speed
* @typedef {[
*   timestamp
*   speed
* ]} Keyframe
*/
