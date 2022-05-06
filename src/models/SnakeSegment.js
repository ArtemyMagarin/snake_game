/**
 * Represents snake's segment
 */
export class SnakeSegment {
  /**
   * @param {import('./BoxedCoordinate').BoxedCoordinate} coordinate
   */
  constructor(coordinate) {
    this.coordinate = coordinate;
    this.#hasFood = false;
  }

  /**
   * @param {boolean} value
   */
  set hasFood(value) {
    this.#hasFood = value;
  }

  get hasFood() {
    this.#hasFood;
  }
}
