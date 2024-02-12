import React from 'react'

function PlayGround() {

    const arr = [
        [11,12,13],
        [21,22,23],
        [31,32,33]
    ]

    let newArray = []
      arr.forEach((ele1, index1) => {
        newArray.push(ele1[index1])
      });

    // console.log(newArray)

    let newArray1 = []
    let arrLen = arr.length
    arr.forEach((ele1, index1) => {
      newArray1.push(ele1[arrLen -= 1])
    });

  console.log(newArray1)







    // let firArr = []
    // let finalArr = []
    // arr.forEach((ele,index) => {
    //     arr.forEach((ele1,index1) => {
    //         firArr.push(ele1[index])
    //     });
    //     finalArr.push(firArr)
    //     firArr = []
    // });
    // console.log(finalArr)


    // let newArr = []
    // let finalArr = []
    // // for(let i=0; i < arr.length; i++) {
    // //     console.log(arr[i][0])
    // //     newArr.push(arr[i][0])
    // // }
    // arr.forEach((ele,index) => {
    //     arr.forEach((element) => {
    //         newArr.push(element[index])
    //     });
    //     // console.log('xx', xx)
    //     finalArr = [...finalArr,[...newArr]]
    //     newArr = []
    // });
    // console.log('newArr', newArr)
    // console.log('finalArr', finalArr)



  return (
    <div>PlayGround</div>
  )
}

export default PlayGround