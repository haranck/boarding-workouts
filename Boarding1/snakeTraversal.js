const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
//7 8 9 6 5 4 1 2 3

function snakeTraversal(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let leftToRight = true;

    for (let i = rows - 1; i >= 0; i--) {
        if (leftToRight) {
            for (let j = 0; j < cols; j++) {
                console.log(matrix[i][j]);
            }
        } else {
            for (let j = cols - 1; j >= 0; j--) {
                console.log(matrix[i][j]);
            }
        }
        leftToRight = !leftToRight;
    }
}
snakeTraversal(matrix);
