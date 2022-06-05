// Chris Donohue - June 5th, 2022

export const primeFactors = (factor) => {
  let primeFactors = [];
  for (let i = 2; i <= factor; i++) {
    while (factor % i === 0) {
      factor /= i;
      primeFactors.push(i);
    }
  }
  return primeFactors;
};
