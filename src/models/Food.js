/**
 * Represents snake's food
 */
export class Food {
  /**
   * @constructor
   * @param {import('./BoxedCoordinate').BoxedCoordinate} coordinate position of food
   */
  constructor(coordinate) {
    this.coordinate = coordinate;
  }
}
