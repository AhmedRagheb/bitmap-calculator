import { pixel } from "./pixel";

export class NearestPath {
  calculate(input: number[][]): number[][] {
    if (!input.length) {
      return [];
    }
    
    let distance = 0;

    const visited: pixel[] = [];
    const rows: number = input.length;
    const cols: number = input[0].length;

    const result: number[][] = this.fillWhiteMap(input);
    const queue: pixel[] = this.fillQueueWithPixels(rows, cols, input);

    while (queue.length > 0) {
      let queueSize = queue.length;
      while (queueSize--) {
        const pixel = queue.shift() || {} as pixel;
        if (this.isVisited(visited, pixel)) {
          continue;
        }

        visited.push(pixel);
        result[pixel.row][pixel.col] = distance;

        this.updateQueue(pixel, queue, rows, cols);
      }

      distance++;
    }

    return result;
  }

  private updateQueue(pixel: pixel, queue: pixel[], rows: number, cols: number) {
    if (pixel.row - 1 >= 0) {
      queue.push({ row: pixel.row - 1, col: pixel.col });
    }

    if (pixel.col - 1 >= 0) {
      queue.push({ row: pixel.row, col: pixel.col - 1 });
    }

    if (pixel.row + 1 < rows) {
      queue.push({ row: pixel.row + 1, col: pixel.col });
    }

    if (pixel.col + 1 < cols) {
      queue.push({ row: pixel.row, col: pixel.col + 1 });
    }
  }

  private isVisited(visited: pixel[], pixel: pixel): boolean {
    const vistedPixel = visited.find(x => x.row === pixel.row && x.col === pixel.col);

    return vistedPixel !== undefined;
  }

  private fillWhiteMap(input: number[][]): number[][] {
    return input.map((x) => x.map(() => 0));
  }

  private fillQueueWithPixels(rows: number, cols: number, input: number[][]): pixel[] {
    let queue: pixel[] = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (input[i][j] === 1) {
          queue.push({ row: i, col: j });
        }
      }
    }

    return queue;
  }
}
