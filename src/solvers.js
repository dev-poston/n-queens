/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board ({n: n});
  for (var row = 0; row < solution.rows().length; row++) {
    for (var col = 0; col < solution.rows()[row].length; col++) {
      solution.rows()[row][col] = 1;
      if (solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()) {
        solution.rows()[row][col] = 0;
      }
    }
  }

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var newBoard = new Board({n: n});
  var solutionCount = 0;

  var inner = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      newBoard.rows()[row][col] = 1;
      if (newBoard.hasColConflictAt(col)) {
        newBoard.rows()[row][col] = 0;
      } else {
        inner(row + 1);
        newBoard.rows()[row][col] = 0;
      }
    }
  };
  inner(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var newBoard = new Board({n: n});
  var solutionCount = 0; //fixme
  var tempBoard;
  var counter = 0;

  if (n === 0 || n === 2 || n === 3) {
    return newBoard.rows();
  }

  var inner = function(row) {
    if (row === n) {
      tempBoard = newBoard.rows();
      counter++;
      return;
    } else {
      for (var col = 0; col < n; col++) {
        newBoard.rows()[row][col] = 1;
        if (newBoard.hasAnyQueenConflictsOn(row, col)) {
          newBoard.rows()[row][col] = 0;
        } else {
          inner(row + 1);
          if (counter >= 1) {
            return tempBoard;
          } else {
            newBoard.rows()[row][col] = 0;
          }
        }
      }
    }
  };
  inner(0);

  return tempBoard;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var newBoard = new Board({n: n});
  var solutionCount = 0;

  var inner = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    } else {
      for (var col = 0; col < n; col++) {
        newBoard.rows()[row][col] = 1;
        if (!newBoard.hasAnyQueenConflictsOn(row, col)) {
          inner(row + 1);
        }
        newBoard.rows()[row][col] = 0;
      }
    }
  };
  inner(0);
  return solutionCount;
};
