const join = c => xs => xs.join(c);
const pipe = f => g => x => g(f(x));
const map = f => xs => xs.map(f);
const transpose = xsxs => xsxs[0].map((_, i) => xsxs.map(row => row[i]));
const reverse = xs => xs.reverse();
const reflect = map(reverse);
const merge = f => xs => ys => xs.map((_, i) => f(xs[i])(ys[i]));
const add = x => y => x + y;
const and = x => y => x && y;
const any = p => xs => xs.some(p);
const slice = start => end => xs => xs.slice(start, end);

const Piece = {
  I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  O: [[2, 2], [2, 2]],
  T: [[0, 3, 0], [3, 3, 3], [0, 0, 0]],
  S: [[0, 4, 4], [4, 4, 0], [0, 0, 0]],
  Z: [[5, 5, 0], [0, 5, 5], [0, 0, 0]],
  J: [[6, 0, 0], [6, 6, 6], [0, 0, 0]],
  L: [[0, 0, 7], [7, 7, 7], [0, 0, 0]]
};

const M = {};
M.toString = pipe(map(join("")))(join("\n"));
M.rotate = pipe(transpose)(reflect);
M.merge = f => merge(merge(f));
M.and = M.merge(and);
M.any = p => any(any(p));
M.slice = from => to => pipe(slice(from.y)(to.y))(map(slice(from.x)(to.x)));
