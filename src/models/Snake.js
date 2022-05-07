import { getNearestDirections, validateDirection } from "./Direction.js";
import { SnakeSegment } from "./SnakeSegment.js";

export class Snake {
  /** @type {SnakeSegment[]} */
  #segments = [];

  /** @type {boolean} */
  #canChangeDirection = true;

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
    validateDirection(direction);
    if (!this.#canChangeDirection) return;

    if (getNearestDirections(this.#direction).includes(direction)) {
      this.#direction = direction;
      // do not allow to change direction untill next move
      this.#canChangeDirection = false;
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

    this.#segments = [new SnakeSegment(newHeadCoordinate), ...this.#segments];

    // if last segment contins food, keep the segment and remove food
    // otherwise remove the last segment to preserve snake's size
    if (this.#segments[this.size - 1].hasFood) {
      this.#segments[this.size - 1].hasFood = false;
    } else {
      this.#segments.pop();
    }
    this.#canChangeDirection = true;
  }

  eat() {
    this.#segments[0].hasFood = true;
  }

  log(logger) {
    logger(this.#segments);
  }
}
