// Chris Donohue - June 4th, 2022

export const valid = (str) => {
  if (str.trim() !== '0' && str.length > 1) {
    let temp = str.split(' ').join('');
    let sum = [...temp]
      .reverse()
      .map((num, i) => {
        if (i % 2 === 1) num *= 2;
        if (num > 9) num -= 9;
        return +num;
      })
      .reduce((acc, curr) => acc + curr);

    if (sum % 10 === 0) return true;
  }
  return false;
};
