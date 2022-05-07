/**
 * Represents snake's food
 */
export class Food {
  /**
   * @constructor
   * @param {import('./BoxedCoordinate').BoxedCoordinate} coordinate position of food
   * @param {number} score amount of points for reaching this food
   */
  constructor(coordinate, score) {
    this.coordinate = coordinate;
    this.score = score;
  }
}
