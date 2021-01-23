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
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n}); //fixme
  var queen = 0;
  var tempSolution = new Board({n: n});
  var possibilities = n;
  var recursionCounter = 0;

  var inner = function (col) {
    //debugger;
    var counter = 0;
    if (recursionCounter === possibilities) {
      queen = 0;
      return solution.rows();
    }
    if (counter === 0) {
      tempSolution.rows()[0][col] = 1;
    }
    for (var row = 0; row < n; row++) {
      for (var index = 0; index < n; index++) {
        tempSolution.rows()[row][index] = 1;
        counter++;
        if (tempSolution.hasAnyQueensConflicts()) {
          tempSolution.rows()[row][index] = 0;
          counter--;
        }
      }
      console.log(tempSolution.rows());
    }
    if (counter > queen) {
      queen = counter;
      solution = tempSolution;
    }
    tempSolution = new Board({n: n});
    recursionCounter++;
    console.log(recursionCounter);
    inner(col + 1);
  };
  inner(0);

  // [1,0,0,0,0,0]
  // [0,0,1,0,0,0]
  // [0,0,0,0,1,0]
  // [0,1,0,0,0,0]
  // [0,0,0,1,0,0]
  // [0,0,0,0,0,0]

  //[1,0,0,0]
  //[0,0,1,0]
  //[0,0,0,0]
  //[0,1,0,0]
  /*
  0: (4) [0, 1, 0, 0]
  1: (4) [0, 0, 0, 1]
  2: (4) [0, 0, 0, 0]
  3: (4) [0, 0, 1, 0]

*/

  // create var queens = 0;
  // create var tempSolution = new board
  // create var possibilities = n
  // create recursionCoutner = 0;

  // inner function (col)
  // base: if recursionCount is equal to possibilities, return solution
  // create var counter = 0

  //  loop over row
  //    loop over colstarting at(col)
  //      col = col or 0
  //      counter++
  //    check row, col and diagonal - use helpers
  //      if conflict
  //        reassign to 0
  //  if counter is greater than queens
  //    queens = counter
  //    solution = tempSol
  //  recursionCounter++
  //  call inner (col + 1)




  // for (var row = 0; row < solution.rows().length; row++) {
  //   for (var col = 0; col < solution.rows()[row].length; col++) {
  //     solution.rows()[row][col] = 1;
  //     if (solution.hasAnyRowConflicts() || solution.hasAnyColConflicts() || solution.hasAnyMajorDiagonalConflicts() || solution.hasAnyMinorDiagonalConflicts()) {
  //       solution.rows()[row][col] = 0;
  //     }
  //   }
  // }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
