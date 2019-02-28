interface Array<T> {
  _get2d(y: number, x: number): T;
  _colCount2d(): number;
  _rowCount2d(): number;
}

Array.prototype._get2d = function(y: number, x: number) {
  return this[y][x];
};

Array.prototype._colCount2d = function() {
  if (!this[0]) return -1;
  if (!Array.isArray(this[0])) return -1;
  return this[0].length;
};

Array.prototype._rowCount2d = function() {
  return this.length;
};
