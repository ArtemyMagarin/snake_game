/**
 * @typedef {'left'|'top'|'right'|'bottom'} Direction
 */

/**
 * throws error if direction is invalid
 * @param {Direction} direction
 */
export function validateDirection(direction) {
  switch (direction) {
    case "left":
    case "top":
    case "right":
    case "bottom":
      break;
    default:
      throw new Error(
        `Unexpected direction: "${direction}". Expected: "left", "top", "right" or "bottom".`
      );
  }
}

/**
 * Returns neighbours for direction
 * @param {Direction} direction
 */
export function getNearestDirections(direction) {
  switch (direction) {
    case "top":
    case "bottom":
      return ["left", "right"];
    case "left":
    case "right":
      return ["top", "bottom"];
  }
}
