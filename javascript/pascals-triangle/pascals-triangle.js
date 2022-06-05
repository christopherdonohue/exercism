// Chris Donohue

export const rows = (amt) => {
  let triangle = [[1]];
  let triangleTemp;
  let temp;
  let k;

  for (let m = 0; m < amt - 1; m++) {
    k = 0;
    triangleTemp = [1, 1];
    for (let i = 1; i <= triangle[m].length - 1; i++) {
      temp = triangle[m][i] + triangle[m][k];
      k++;
      triangleTemp.splice(i, 0, temp);
    }
    triangle.push(triangleTemp);
  }
  if (amt === 0) triangle = [];

  return triangle;
};
