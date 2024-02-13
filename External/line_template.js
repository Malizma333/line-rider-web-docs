/** Template for Line object
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