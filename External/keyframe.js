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
* ]} Keyframe
*/

/** Camera focuser keyframe
* @typedef {number[]} weights
* @typedef {[
*   timestamp
*   weights
* ]} Keyframe
*/

/** Time remap keyframe
* @typedef {number} speed
* @typedef {[
*   timestamp
*   speed
* ]} Keyframe
*/