const join = c => xs => xs.join(c)
const pipe = f => g => x => g(f(x))
const map  = f => xs => xs.map(f)

const Piece = {
  I: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
  O: [[2,2],[2,2]],
  T: [[0,3,0],[3,3,3],[0,0,0]],
  S: [[0,4,4],[4,4,0],[0,0,0]],
  Z: [[5,5,0],[0,5,5],[0,0,0]],
  J: [[6,0,0],[6,6,6],[0,0,0]],
  L: [[0,0,7],[7,7,7],[0,0,0]],
}

const Matrix = {}
Matrix.toString = pipe(map(join('')))(join('\n'))

console.log(
  Matrix.toString(Piece.L)
)
