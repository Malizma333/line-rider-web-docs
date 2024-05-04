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