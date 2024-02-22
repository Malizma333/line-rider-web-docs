/**
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

/** Blue - 0 | Red - 1 | Green - 2
* @typedef { 0 | 1 | 2 } LineType
*/

/**
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