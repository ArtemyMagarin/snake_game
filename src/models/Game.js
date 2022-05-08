import { BoxedCoordinate } from "./BoxedCoordinate.js";
import { Food } from "./Food.js";
import { ScoreCounter } from "./ScoreCounter.js";
import { Snake } from "./Snake.js";

export class Game {
  /** @type {Snake} */
  #snake;

  /** @type {number} */
  #snakeSpeed;

  /** @type {number} */
  #lastSnakeMovementTs;

  /** @type {Food} */
  #food;

  /** @type {ScoreCounter} */
  #score = new ScoreCounter();

  constructor() {}

  start() {
    this.#state = "running";
  }

  pause() {
    this.#state = "paused";
  }

  over() {
    this.#state = "over";
  }

  #updateSnakePosition() {
    const currentTs = performance.now();
    const diff = currentTs - this.#lastSnakeMovementTs;

    if (this.#snakeSpeed >= diff) {
      this.#snake.move();
      this.#lastSnakeMovementTs = currentTs;
    }
  }

  #updateFoodPosition() {
    const tail = this.#snake.segmentsPositions;

    // TODO: random coordinate
    // let nextFoodCoordinate = new BoxedCoordinate()
  }

  #tryToEat() {
    const headPosition = this.#snake.headPosition;
    if (headPosition.equals(this.#food.coordinate)) {
      this.#snake.eat();
      this.#score.add(1);
      this.#updateFoodPosition();
    }
  }

  #checkSnakeSelfIntersection() {
    const headPosition = this.#snake.headPosition;
    const tail = this.#snake.segmentsPositions.slice(1);
    const isIntersects = tail.some((segmentPosition) =>
      segmentPosition.equals(headPosition)
    );
    if (isIntersects) {
      this.over();
    }
  }

  tick() {
    if (this.#state !== "running") return;

    this.#updateSnakePosition();
    this.#checkSnakeSelfIntersection();
    this.#tryToEat();
  }
}
