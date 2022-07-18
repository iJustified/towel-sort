
// You should implement your task here.

module.exports = function towelSort (matrix) {

  const newMatrix = [];

  if (!matrix) {
    return newMatrix;
  }

  for (let i = 0; i < matrix.length; i++ ) {

    if (i % 2 != 0) {
      newMatrix.push(matrix[i].reverse());
    } else {
      newMatrix.push(matrix[i]);
    }
    
  };

  return newMatrix.flat();
  // return [];
}
