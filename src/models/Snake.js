import { SnakeSegment } from "./SnakeSegment";

export class Snake {
  constructor(x, y, size = 3, direction = "right") {
    this.segments = [];
    this.direction = direction;

    for (let i = 0; i < size; i++) {
      this.segments.push(new SnakeSegment());
    }
  }

  get size() {
    return this.segments.length;
  }

  move() {
    const newHeadCoordinate = this.segments[0].coordinate.copy();
    newHeadCoordinate.move(this.direction);

    this.segments.splice(0, 0, new SnakeSegment(newHeadCoordinate));

    // if last segment contins food, keep the segment and remove food
    // otherwise remove the last segment to preserve snake's size
    if (this.segments[this.size - 1].hasFood) {
      this.segments[this.size - 1].hasFood = false;
    } else {
      this.segments.pop();
    }
  }

  eat() {
    this.move();
    this.segments[0].hasFood = true;
  }
}
