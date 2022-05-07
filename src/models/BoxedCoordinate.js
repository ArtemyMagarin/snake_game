import { Coordinate } from "./Coordinate.js";

/**
 * Keeps value between boundaries.
 * @param {number} value value to check
 * @param {number} min low boundary
 * @param {number} max top boundary
 * @returns calculated value between boundaries
 */
function getBoxedValue(value, min, max) {
  const diff = max - min;

  if (value > max) {
    return min + (value % diff);
  }

  if (value < min) {
    return max - (Math.abs(value) % diff);
  }

  return value;
}

/**
 * Returns builder for BoxedCoordinate instances with predefined boundaries
 * @param {number} maxX x boundary
 * @param {number} maxY y boundary
 * @returns builder for BoxedCoordinate with boundaries
 */
export function getBoxedCoordinateBuilder(maxX, maxY) {
  /**
   * @param {number} x x coordinate
   * @param {number} y y coordinate
   * @returns BoxedCoordinate instance
   */
  function boxedCoordinateBuilder(x, y) {
    return new BoxedCoordinate(x, y, maxX, maxY);
  }

  return boxedCoordinateBuilder;
}

/**
 * Represents coordinate, but keeps position values between 0 and maxValue
 */
export class BoxedCoordinate extends Coordinate {
  constructor(x, y, maxX, maxY) {
    super(x, y);
    this.maxX = maxX;
    this.maxY = maxY;
    this.#validateBoundaries();
  }

  left(delta = 1) {
    super.left(delta);
    this.#validateBoundaries();
  }

  top(delta = 1) {
    super.top(delta);
    this.#validateBoundaries();
  }

  right(delta = 1) {
    super.right(delta);
    this.#validateBoundaries();
  }

  bottom(delta = 1) {
    super.bottom(delta);
    this.#validateBoundaries();
  }

  move(direction, delta = 1) {
    super.move(direction, delta);
    this.#validateBoundaries();
  }

  copy() {
    return new BoxedCoordinate(this.x, this.y, this.maxX, this.maxY);
  }

  #validateBoundaries() {
    this.x = getBoxedValue(this.x, 0, this.maxX);
    this.y = getBoxedValue(this.y, 0, this.maxY);
  }
}
