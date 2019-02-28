export default function sumOfGrid(grid: number[][]) {
  return grid.reduce(
    (total, row) => total + row.reduce((rowTotal, e) => rowTotal + e, 0),
    0,
  );
}
