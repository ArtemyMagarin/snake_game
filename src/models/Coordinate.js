import { validateDirection } from "./Direction.js";

/**
 * Represents coordinate
 */
export class Coordinate {
  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Moves coordinate to the left
   * @param {number} delta moves to this amount. Default is 1
   */
  left(delta = 1) {
    this.x -= delta;
  }

  /**
   * Moves coordinate to the top
   * @param {number} delta moves to this amount. Default is 1
   */
  top(delta = 1) {
    this.y -= delta;
  }

  /**
   * Moves coordinate to the right
   * @param {number} delta moves to this amount. Default is 1
   */
  right(delta = 1) {
    this.x += delta;
  }

  /**
   * Moves coordinate to the bottom
   * @param {number} delta moves to this amount. Default is 1
   */
  bottom(delta = 1) {
    this.y += delta;
  }

  /**
   * Moves coordinate to the givent direction.
   * @param {Direction} direction
   * @param {number} delta moves to this amount. Deafault is 1
   */
  move(direction, delta = 1) {
    validateDirection(direction);
    switch (direction) {
      case "left":
        this.left(delta);
        break;
      case "top":
        this.top(delta);
        break;
      case "right":
        this.right(delta);
        break;
      case "bottom":
        this.bottom(delta);
        break;
    }
  }

  /**
   * @returns duplicate of this coordinate
   */
  copy() {
    return new Coordinate(this.x, this.y);
  }
}
