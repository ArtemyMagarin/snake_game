/**
 * Represents snake's segment
 */
export class SnakeSegment {
  /** @type {boolean} */
  #hasFood = false;

  /** @type {import('./BoxedCoordinate').BoxedCoordinate} coordinate */
  coordinate;

  /**
   * @param {import('./BoxedCoordinate').BoxedCoordinate} coordinate
   */
  constructor(coordinate) {
    this.coordinate = coordinate;
  }

  /**
   * @param {boolean} value
   */
  set hasFood(value) {
    this.#hasFood = value;
  }

  get hasFood() {
    return this.#hasFood;
  }
}
