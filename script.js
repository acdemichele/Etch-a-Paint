document.addEventListener("DOMContentLoaded", () => {
  const sketchBoard = document.querySelector("#canvas-container");
  initializeCanvas(sketchBoard);
  const resetButton = document.querySelector("#reset-button");
  const changeGridSizeButton = document.querySelector(
    "#change-board-size-button"
  );

  resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.style.background = "rgb(227, 240, 240)";
    });
  });

  changeGridSizeButton.addEventListener("click", () => {
    let newGridSize = null;
    while (
      newGridSize === null ||
      isNaN(newGridSize) ||
      parseInt(newGridSize) > 100 ||
      parseInt(newGridSize) < 2
    ) {
      newGridSize = prompt("Enter new grid size, 100 is the max!");
    }
    const newGridSizeInt = parseInt(newGridSize);
    const canvasContainer = document.querySelector("#canvas-container");
    const squares = canvasContainer.querySelectorAll(".square");
    squares.forEach((square) => {
      square.remove();
    });
    initializeCanvas(canvasContainer, newGridSizeInt);
  });
});
function initializeCanvas(board, gridSize = 16) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.flex = "1";
    square.style.minWidth = `calc(100% / ${gridSize})`;
    square.style.height = `calc(100% / ${gridSize})`;

    square.addEventListener("mouseover", () => {
      square.style.background = "black";
    });
    board.appendChild(square);
  }
}
