function findZombies(matrix) {
  console.log("Input Matrix:", matrix);

  let patientZero = matrix[0][0];
  let numRows = matrix.length;
  let numCols = matrix[0].length;

  let solvedMatrix = []; // To store the result as a 2D matrix

  for (let i = 0; i < numRows; i++) {
    let row = []; // Create a new row for the solvedMatrix
    for (let j = 0; j < numCols; j++) {
      if (matrix[i][j] === patientZero) {
        row.push(1); // Match with patientZero
      } else {
        row.push(0); // No match
      }
    }
    solvedMatrix.push(row); // Add the row to the solvedMatrix
  }

  console.log("Solved Matrix:", solvedMatrix);
  return solvedMatrix; // Return the solvedMatrix if needed
}

// Test the function
findZombies([
  [8, 2, 3],
  [8, 2, 3],
  [1, 2, 8],
]);
