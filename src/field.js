export const FIELD_1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
export function field(FIELD_1) {
  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  for (let i = 0; i < 10; i++) {
    let s = randomInteger(1, 2);
    if (s === 1) {
      if (i < 1) {
        let x = randomInteger(0, 6);
        let y = randomInteger(0, 6);
        while (
          FIELD_1[y][x] >= 1 ||
          FIELD_1[y][x + 1] >= 1 ||
          FIELD_1[y][x + 2] >= 1 ||
          FIELD_1[y][x + 3] >= 1
        ) {
          x = randomInteger(0, 6);
          y = randomInteger(0, 6);
        }
        FIELD_1[y][x] = 1;
        FIELD_1[y][x + 1] = 1;
        FIELD_1[y][x + 2] = 1;
        FIELD_1[y][x + 3] = 1;
        if (x - 1 >= 0) FIELD_1[y][x - 1] = 2;
        if (x + 4 <= 9) FIELD_1[y][x + 4] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 2] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 3] = 2;
        FIELD_1[y + 1][x] = 2;
        FIELD_1[y + 1][x + 1] = 2;
        FIELD_1[y + 1][x + 2] = 2;
        FIELD_1[y + 1][x + 3] = 2;
        if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
        if (x + 4 <= 9) FIELD_1[y + 1][x + 4] = 2;
        if (y + 4 <= 9) if (y - 1 >= 0) FIELD_1[y - 1][x + 4] = 2;
        if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
      }
      if (i < 3 && i >= 1) {
        let x = randomInteger(0, 7);
        let y = randomInteger(0, 7);
        while (
          FIELD_1[y][x] >= 1 ||
          FIELD_1[y][x + 1] >= 1 ||
          FIELD_1[y][x + 2] >= 1
        ) {
          x = randomInteger(0, 7);
          y = randomInteger(0, 7);
        }
        FIELD_1[y][x] = 1;
        FIELD_1[y][x + 1] = 1;
        FIELD_1[y][x + 2] = 1;
        if (x - 1 >= 0) FIELD_1[y][x - 1] = 2;
        FIELD_1[y][x + 3] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 2] = 2;
        FIELD_1[y + 1][x] = 2;
        FIELD_1[y + 1][x + 1] = 2;
        FIELD_1[y + 1][x + 2] = 2;
        if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
        FIELD_1[y + 1][x + 3] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 3] = 2;
        if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
      }
      if (i < 6 && i >= 3) {
        let x = randomInteger(0, 8);
        let y = randomInteger(0, 8);
        while (FIELD_1[y][x] >= 1 || FIELD_1[y][x + 1] >= 1) {
          x = randomInteger(0, 8);
          y = randomInteger(0, 8);
        }
        FIELD_1[y][x] = 1;
        FIELD_1[y][x + 1] = 1;
        if (x - 1 >= 0) FIELD_1[y][x - 1] = 2;
        FIELD_1[y][x + 2] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
        FIELD_1[y + 1][x] = 2;
        FIELD_1[y + 1][x + 1] = 2;
        if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 2] = 2;
        FIELD_1[y + 1][x + 2] = 2;
      }
    }
    if (s === 2) {
      if (i < 1) {
        let x = randomInteger(0, 6);
        let y = randomInteger(0, 6);
        while (
          FIELD_1[y][x] >= 1 ||
          FIELD_1[y + 1][x] >= 1 ||
          FIELD_1[y + 2][x] >= 1 ||
          FIELD_1[y + 3][x] >= 1
        ) {
          x = randomInteger(0, 6);
          y = randomInteger(0, 6);
        }
        FIELD_1[y][x] = 1;
        FIELD_1[y + 1][x] = 1;
        FIELD_1[y + 2][x] = 1;
        FIELD_1[y + 3][x] = 1;
        if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
        if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
        if (y + 4 <= 9) FIELD_1[y + 4][x] = 2;
        if (y + 4 <= 9) FIELD_1[y + 4][x + 1] = 2;
        if (y + 4 <= 9) FIELD_1[y + 4][x - 1] = 2;
        if (y - 1 >= 0) FIELD_1[y][x + 1] = 2;
        FIELD_1[y + 1][x + 1] = 2;
        FIELD_1[y + 2][x + 1] = 2;
        FIELD_1[y + 3][x + 1] = 2;
        FIELD_1[y][x - 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 2][x - 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 3][x - 1] = 2;
      }
      if (i < 3 && i >= 1) {
        let x = randomInteger(0, 7);
        let y = randomInteger(0, 7);
        while (
          FIELD_1[y][x] >= 1 ||
          FIELD_1[y + 1][x] >= 1 ||
          FIELD_1[y + 2][x] >= 1
        ) {
          x = randomInteger(0, 7);
          y = randomInteger(0, 7);
        }
        FIELD_1[y][x] = 1;
        FIELD_1[y + 1][x] = 1;
        FIELD_1[y + 2][x] = 1;
        if (y + 3 <= 9) FIELD_1[y + 3][x] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
        FIELD_1[y + 1][x + 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
        if (x - 1 >= 0) FIELD_1[y][x - 1] = 2;
        FIELD_1[y][x + 1] = 2;
        if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
        if (y + 3 <= 9) FIELD_1[y + 3][x + 1] = 2;
        if (y + 3 <= 9) if (x - 1 >= 0) FIELD_1[y + 3][x - 1] = 2;
        FIELD_1[y + 2][x + 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 2][x - 1] = 2;
      }
      if (i < 6 && i >= 3) {
        let x = randomInteger(0, 8);
        let y = randomInteger(0, 8);
        while (FIELD_1[y][x] >= 1 || FIELD_1[y + 1][x] >= 1) {
          x = randomInteger(0, 8);
          y = randomInteger(0, 8);
        }
        FIELD_1[y][x] = 1;
        FIELD_1[y + 1][x] = 1;
        if (y + 2 <= 9) FIELD_1[y + 2][x] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
        FIELD_1[y + 1][x + 1] = 2;
        if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
        if (x - 1 >= 0) FIELD_1[y][x - 1] = 2;
        FIELD_1[y][x + 1] = 2;
        if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
        if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
        if (y + 2 <= 9) FIELD_1[y + 2][x + 1] = 2;
        if (y + 2 <= 9) if (x - 1 >= 0) FIELD_1[y + 2][x - 1] = 2;
      }
    }
    if (i >= 6) {
      let x = randomInteger(0, 9);
      let y = randomInteger(0, 9);
      while (FIELD_1[y][x] === 1 || FIELD_1[y][x] === 2) {
        x = randomInteger(0, 9);
        y = randomInteger(0, 9);
      }
      FIELD_1[y][x] = 1;
      if (y + 2 <= 9) FIELD_1[y + 1][x] = 2;
      if (y - 1 >= 0) FIELD_1[y - 1][x] = 2;
      if (x - 1 >= 0) FIELD_1[y][x - 1] = 2;
      FIELD_1[y][x + 1] = 2;
      if (x - 1 >= 0 && y - 1 >= 0) FIELD_1[y - 1][x - 1] = 2;
      if (y + 1 <= 9) if (x - 1 >= 0) FIELD_1[y + 1][x - 1] = 2;
      if (y - 1 >= 0) FIELD_1[y - 1][x + 1] = 2;
      if (y + 1 <= 9) FIELD_1[y + 1][x + 1] = 2;
    }
  }
  for (let f = 0; f < 10; f++) {
    for (let g = 0; g < 11; g++) {
      if (FIELD_1[f][g] === 2) {
        FIELD_1[f][g] = 0;
      }
      if (g === 10) {
        FIELD_1[f].splice(g);
      }
    }
  }
  return FIELD_1;
}
