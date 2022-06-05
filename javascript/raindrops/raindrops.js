export const convert = (num) => {
  let res = '';
  num % 3 === 0 && (res += 'Pling');
  num % 5 === 0 && (res += 'Plang');
  num % 7 === 0 && (res += 'Plong');
  !res && (res = `${num}`);
  return res;
};
