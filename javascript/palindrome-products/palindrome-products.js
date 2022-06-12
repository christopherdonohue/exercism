// Really did not like this exercise...

export class Palindromes {
  static generate(obj) {
    const reverseNumber = (num) => Number([...String(num)].reverse().join(''));
    let palindromes = [];
    let smallestFactors = [];
    let largestFactors = [];
    let quotients = [];
    let k = 0;
    let returnObj;

    if (obj.minFactor > obj.maxFactor) {
      throw new Error('min must be <= max');
    }

    for (let i = obj.minFactor; i <= obj.maxFactor; i++) {
      for (let j = i; j <= obj.maxFactor; j++) {
        let prod = j * i;
        if (obj.minFactor === 1) palindromes.unshift(1);
        if (reverseNumber(prod) === prod) {
          let temp = palindromes[k - 1];
          palindromes.unshift(prod);
          if (temp > prod) {
            i = j;
          }
          k++;
          break;
        }
      }
    }

    palindromes.sort((a, b) => a - b);

    for (let i = obj.minFactor; i < obj.maxFactor; i++) {
      let res = palindromes[0] / i;
      if (
        palindromes[0] % i === 0 &&
        res >= obj.minFactor &&
        res <= obj.maxFactor
      )
        smallestFactors.push([i, res]);
    }

    for (let i = obj.minFactor; i < obj.maxFactor; i++) {
      let res = palindromes[palindromes.length - 1] / i;

      if (
        palindromes[palindromes.length - 1] % i === 0 &&
        res >= obj.minFactor &&
        res <= obj.maxFactor &&
        !quotients.includes(res)
      ) {
        largestFactors.push([i, res]);
      }
      quotients.push(res);
      quotients.push(i);
    }

    returnObj = {
      smallest: {
        value: palindromes.length > 0 ? palindromes[0] : null,
        factors: smallestFactors,
      },

      largest: {
        value:
          palindromes.length > 0 ? palindromes[palindromes.length - 1] : null,
        factors: largestFactors,
      },
    };
    return returnObj;
  }
}
