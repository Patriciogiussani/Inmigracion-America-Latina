document.addEventListener('DOMContentLoaded', () => {
    // Selección de contenedores
    const crucigramaGrid = document.querySelector('.crucigrama-grid');
    const sopaGrid = document.querySelector('.sopa-grid');

    if (crucigramaGrid) {
        createCrucigrama(crucigramaGrid);
    }
    if (sopaGrid) {
        renderSopa(sopaGrid);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    createCrucigrama();
// Crear Crucigrama
function createCrucigrama(container) {
    const size = 8; // Tamaño del crucigrama
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const input = document.createElement('input');
            input.maxLength = 1;
            cell.appendChild(input);
            container.appendChild(cell);
        }
    }
}

renderSopa();
// Generar Sopa de Letras
function renderSopa(container) {
    const gridSize = 12;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const sopaWords = ["MIGRACION", "LATINOS", "REMESAS", "INTRARREGIONAL", "CULTURA", "AMERICA", "FRONTERA"];
    const sopaBoard = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));

    placeWords(sopaBoard, sopaWords);
    fillBoardWithRandomLetters(sopaBoard, letters);

    // Renderizar sopa de letras
    sopaBoard.forEach(row => {
        row.forEach(letter => {
            const cell = document.createElement('div');
            cell.classList.add('sopa-cell');
            cell.textContent = letter;
            container.appendChild(cell);
        });
    });
}

function placeWords(board, words) {
    words.forEach(word => {
        let placed = false;
        while (!placed) {
            const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
            const row = Math.floor(Math.random() * board.length);
            const col = Math.floor(Math.random() * board[0].length);

            if (canPlaceWord(board, word, row, col, direction)) {
                for (let i = 0; i < word.length; i++) {
                    const r = direction === 'horizontal' ? row : row + i;
                    const c = direction === 'horizontal' ? col + i : col;
                    board[r][c] = word[i];
                }
                placed = true;
            }
        }
    });
}

function canPlaceWord(board, word, row, col, direction) {
    if (direction === 'horizontal' && col + word.length > board[0].length) return false;
    if (direction === 'vertical' && row + word.length > board.length) return false;

    for (let i = 0; i < word.length; i++) {
        const r = direction === 'horizontal' ? row : row + i;
        const c = direction === 'horizontal' ? col + i : col;
        if (board[r][c] && board[r][c] !== '') return false;
    }
    return true;
}

function fillBoardWithRandomLetters(board, letters) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (!board[row][col]) {
                board[row][col] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }
}
});