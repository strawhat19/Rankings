export class Column {
  id?: number | string;
  name?: number | string;
  items?: number[] | string[] | any[];
  constructor(partialColumnData: Partial<Column>) {
    Object.assign(this, partialColumnData);
  }
}

export class Board {
  columns?: Column[];
  id?: number | string;
  name?: number | string;
  constructor(partialBoardData: Partial<Board>) {
    Object.assign(this, partialBoardData);
  }
}
