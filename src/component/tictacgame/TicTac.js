import React, { useEffect, useState } from 'react';
import './index.css'


const table = (size) => {
    const rowTable = []
    for(let i = 0; i < size; i++) {
        rowTable.push([...new Array(size)])
    }
    return rowTable
} 

function TicTac() {
const [tableData, setTableData] = useState(table(3))
const [user, SetUser] = useState("X")
const [winner, setWinner] = useState(false)

const horizondalvalidate = () => {
    for(let x of tableData) {
        const hVali = [...new Set(x)]
        console.log(hVali)
        if (hVali.length < 2 && !hVali.includes(undefined)) {
            return true
        }
    }
}

const verticalvalidate = () => {
    let firstEle = []
    let finalEle = []
    tableData.forEach((ele, ind) => {
        tableData.forEach((ele1, ind1) => {
            firstEle.push(ele1[ind])
        });   
        finalEle.push(firstEle)
        firstEle = []
    });
    for(let i of finalEle) {
        const vvali = [...new Set(i)]
        if (vvali.length < 2 && !vvali.includes(undefined)) {
            return true
        }
    }
}

const diagonalvalidate = () => {
    let diaArr1 = []
    tableData.forEach((ele,ind) => {
        diaArr1.push(ele[ind])
    });
    const diaArr12 = [...new Set(diaArr1)]
    if(diaArr12.length < 2 && !diaArr12.includes(undefined)) {
        return true
    }
    // console.log('diaArr12', diaArr12)
    let diaArr2 = []
    let tableDataLen = tableData.length
    tableData.forEach((ele,ind) => {
        diaArr2.push(ele[tableDataLen -= 1])
    });
    const disArr22 = [...new Set(diaArr2)]
    if(disArr22.length < 2 && !disArr22.includes(undefined)){
        return true
    }
    // console.log('diaArr2', diaArr2)
}

const handelClick = (r, c) => {
    console.log(r, c)
    tableData[r][c] = user
    if (user === "X") {
        SetUser("O")
    } else {
        SetUser("X")
    }
    setTableData([...tableData])

    if(horizondalvalidate() || verticalvalidate() || diagonalvalidate()) {
        console.log(`${user} is the Winner`)
        setWinner(true)
        // alert(`${user} is the Winner`)
    }
}

const handleReset = () => {
    console.log("reset")
    setWinner(false)
    setTableData(table(3))
}

console.log('tableData', tableData)

  return (
    <div className={winner ? 'gameOver' : ''}>
        {tableData.map((i, indexr) => {
            return (
                <div key={indexr} className='tableRow'>
                {
                    i.map((j, indexc) => {
                        return <button disabled={j !== undefined} onClick={() => handelClick(indexr,indexc)} key={indexc}>{j}</button>
                    })
                }
                </div>
            )
        })}
        {winner &&
            <>
            <div className="winner">{`${user === 'O' ? 'X' : 'O'} is the Winner`}</div>
            <div className="reset" onClick={handleReset}>Reset</div>
            </>
        }
    </div>
  )
}

export default TicTac