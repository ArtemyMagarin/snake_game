/**
 * Represents simple counter
 */
export class ScoreCounter {
  constructor() {
    this.score = 0;
  }

  /**
   * Adds points to current score value
   * @param {number} amount adds this amount to current score. Default is 1
   */
  add(amount = 1) {
    this.score += amount;
  }

  /**
   * Resets current value to 0
   */
  reset() {
    this.score = 0;
  }
}
