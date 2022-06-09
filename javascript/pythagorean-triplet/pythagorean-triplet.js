export function triplets({ minFactor, maxFactor, sum }) {
  let k;
  let triplets = [];

  for (let i = 0; i <= sum / 3; i++) {
    for (let j = i + 1; j < sum / 2; j++) {
      k = sum - i - j;
      if (i ** 2 + j ** 2 === k ** 2) {
        if (
          (!maxFactor && minFactor && i >= minFactor) ||
          (!minFactor && maxFactor && k <= maxFactor)
        ) {
          triplets.push(new Triplet(i, j, k));
        } else if (minFactor && maxFactor && i >= minFactor && k <= maxFactor) {
          triplets.push(new Triplet(i, j, k));
        } else if (!minFactor && !maxFactor) {
          triplets.push(new Triplet(i, j, k));
        }
      }
    }
  }
  return triplets;
}

class Triplet {
  constructor(a, b, c) {
    this.arr = [a, b, c];
  }
  toArray() {
    return this.arr;
  }
}
