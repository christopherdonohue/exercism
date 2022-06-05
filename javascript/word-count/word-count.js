//
// I think this is a mess but... it works.
//

import { match } from 'assert';

export const countWords = (phrase) =>
  phrase

    .toLowerCase()

    .match(/\w+('\w+)?/g)

    .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});
