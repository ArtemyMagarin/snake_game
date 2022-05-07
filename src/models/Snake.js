import { SnakeSegment } from "./SnakeSegment";

export class Snake {
  /** @type {SnakeSegment[]} */
  #segments = [];

  /** @type {Direction} */
  #direction = "right";

  /**
   * @constructor
   * @param {import('./BoxedCoordinate').BoxedCoordinate} initialHeadPosition
   * @param {number} size
   * @param {Direction} direction
   */
  constructor(initialHeadPosition, size = 3, direction = "right") {
    this.#direction = direction;
    this.#initializeSegments(initialHeadPosition, size);
  }

  get size() {
    return this.#segments.length;
  }

  get direction() {
    return this.#direction;
  }

  /**
   * @param {Direction} direction
   */
  set direction(direction) {
    switch (direction) {
      case "left":
      case "top":
      case "right":
      case "bottom":
        this.#direction = direction;
        break;
      default:
        throw new Error(
          `Unexpected direction: "${direction}". Expected: "left", "top", "right" or "bottom".`
        );
    }
  }

  /**
   * Builds initial body of snake
   * @param {import('./BoxedCoordinate').BoxedCoordinate} initialHeadPosition
   * @param {number} size
   */
  #initializeSegments(initialHeadPosition, size) {
    const coordinates = [initialHeadPosition];
    for (let i = 0; i < size - 1; i++) {
      const nextCoordinate = coordinates[coordinates.length - 1].copy();
      nextCoordinate.move(this.#direction);
      coordinates.push(nextCoordinate);
    }
    this.#segments = coordinates.map(
      (coordinate) => new SnakeSegment(coordinate)
    );
  }

  move() {
    const newHeadCoordinate = this.#segments[0].coordinate.copy();
    newHeadCoordinate.move(this.#direction);

    this.#segments.splice(0, 0, new SnakeSegment(newHeadCoordinate));

    // if last segment contins food, keep the segment and remove food
    // otherwise remove the last segment to preserve snake's size
    if (this.#segments[this.size - 1].hasFood) {
      this.#segments[this.size - 1].hasFood = false;
    } else {
      this.#segments.pop();
    }
  }

  eat() {
    this.#segments[0].hasFood = true;
  }
}
