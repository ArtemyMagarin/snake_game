import { getBoxedCoordinateBuilder } from "./models/BoxedCoordinate.js";
import { Snake } from "./models/Snake.js";

const buildCoordinate = getBoxedCoordinateBuilder(100, 100);

/**
 * logs snakes coordinates
 * @param {import('./models/SnakeSegment').SnakeSegment[]} segments
 */
const logger = (segments) => {
  const values = [];
  const styles = [];
  segments.forEach((segment) => {
    values.push(`%c(${segment.coordinate.x}, ${segment.coordinate.y})`);
    styles.push(segment.hasFood ? "color: red;" : "color: black;");
  });
  console.log(values.join(", "), ...styles);
};

const snake = new Snake(buildCoordinate(50, 50), 5);

snake.log(logger);
snake.move();
snake.log(logger);
snake.move();
snake.eat();
snake.log(logger);

snake.move();
snake.log(logger);
snake.move();
snake.eat();
snake.log(logger);
snake.direction = 'left'
snake.move();
snake.log(logger);
snake.move();
snake.log(logger);
snake.move();
snake.log(logger);
snake.move();
snake.log(logger);
snake.move();
snake.log(logger);
snake.move();
snake.log(logger);
