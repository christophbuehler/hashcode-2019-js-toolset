/**
 * Get all siblings of a cell.
 * @param grid a grid
 * @param rootX cell x
 * @param rootY cell y
 */
export default function getSiblings(
  grid: number[][],
  rootX: number,
  rootY: number,
  includeDiagonal = false,
): Array<{ x: number; y: number; value: number }> {
  const rowCount = grid.length;
  const colCount = grid[0].length;

  return (
    [
      { x: 0, y: -1 }, // top
      { x: 1, y: 0 }, // right
      { x: 0, y: 1 }, // bottom
      { x: -1, y: 0 }, // left
    ]
      .concat(
        includeDiagonal
          ? [
              { x: -1, y: -1 }, // top left
              { x: 1, y: -1 }, // top right
              { x: 1, y: 1 }, // bottom right
              { x: -1, y: 1 }, // bottom left
            ]
          : [],
      )
      // transform to actual coordinates
      .map(({ x, y }) => ({ x: rootX + x, y: rootY + y }))
      // out of bounds check (could be in separate function)
      .filter(({ x, y }) => x >= 0 && y >= 0 && y < rowCount && x < colCount)
      // add cell values to output
      .map(({ x, y }) => ({ x, y, value: grid[y][x] }))
  );
}
