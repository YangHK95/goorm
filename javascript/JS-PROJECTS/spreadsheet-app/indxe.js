const spreadSheetContainer = document.querySelector('#spreadsheet-container');
const ROWS = 10
const COLS = 10
const spreadsheet = []
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']



// 문자열이 아닌 객체 데이터로 생성하기.
class Cell {
    constructor(isHeader, disabled, data, row, column, active = false) {
        this.isHeader = isHeader
        this.disabled = disabled
        this.data = data
        this.row = row
        this.column = column
        this.active = active
    }
}

// 기본 데이터 생성하기
initSpreadsheet()

function initSpreadsheet() {
    for (let i = 0; i < ROWS; i++) {
        let spreadsheetRow = []
        for (let j = 0; j < COLS; j++) {
            let cellData = ""
            let isHeader = false
            let disabled = false

            // 모든 row 첫 번째 컬럼에 숫자 넣기
            if (j === 0) {
                cellData = i;
                isHeader = true;
                disabled = true;
            }
            if (i === 0) {
                cellData = alphabets[j - 1];
                isHeader = true;
                disabled = true;
            }
            // 첫 번째 row 의 컬럼 ""
            if (!cellData) {
                cellData = ''
            }


            const cell = new Cell(isHeader, disabled, cellData, i, j, false)
            spreadsheetRow.push(cell)

        }
        spreadsheet.push(spreadsheetRow)
    }
    drawSheet()
    console.log(spreadsheet)
}

// cell 생성하기
function createCellEl(cell) {
    const cellEl = document.createElement('input')
    cellEl.className = 'cell'
    cellEl.id = 'cell_' + cell.row + cell.column
    cellEl.value = cell.data
    cellEl.disabled = cell.disabled

    if (cell.isHeader) {
        cellEl.classList.add('header')
    }

    return cellEl
}


// cell 렌덩하기 & 10개의 셀을 하나의 row div로 감싸기
function drawSheet() {
    for (let i = 0; i < spreadsheet.length; i++) {
        const rowContainerEl = document.createElement('div')
        rowContainerEl.className = 'cell-row'
        for (let j = 0; j < spreadsheet[i].length; j++) {
            const cell = spreadsheet[i][j]
            rowContainerEl.append(createCellEl(cell))


        }
        spreadSheetContainer.append(rowContainerEl)
    }
}
