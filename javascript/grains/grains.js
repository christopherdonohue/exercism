// Chris Donohue - June 5th, 2022

const CHESSBOARD_TOTAL_NUMBER_OF_SQUARES = 64;
export const square = (num) =>
  num > 0 && num < 65 ? BigInt(2 ** (num - 1)) : throwError();

export const throwError = () => {
  throw new Error('square must be between 1 and 64');
};

export const total = () =>
  2n ** BigInt(CHESSBOARD_TOTAL_NUMBER_OF_SQUARES) - 1n;
