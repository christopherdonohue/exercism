//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (input) => {
  let arr = [];
  let sum;
  if (input >= 1) {
    for (let i = 0; i < input; i++) {
      if (input % i === 0) {
        arr.push(i);
      }
    }
    sum = arr.reduce((prev, curr) => prev + curr, 0);
    if (sum === input) return 'perfect';
    else if (sum > input) return 'abundant';
    else if (sum < input || arr[0] === input) return 'deficient';
  } else {
    throw new Error('Classification is only possible for natural numbers.');
  }
};
