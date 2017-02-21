
function merge(arrayOne, arrayTwo){
  // console.log('arrayOne and ArrayTwo', arrayOne , arrayTwo)
  let result = []
  while(arrayOne.length + arrayTwo.length > 0){
    console.log('arrayOne and arrayTwo', arrayOne , arrayTwo)
    if(arrayOne[0] > arrayTwo[0]){
      result.shift(arrayTwo.pop())
    }else{
      result.shift(arrayOne.pop)
    }
  }

  while(arrayOne.length > 0){
    console.log('arrayOne', arrayOne)
    result.shift(arrayOne.pop)
    console.log('result', result)
  }
  while(arrayTwo.length > 0){
    console.log('arrayTwo', arrayTwo)
    result.shift(arrayTwo.pop)
    console.log('result', result)
  }
  // console.log('result', result)
  return result
}
//1* mergeSort([1,3,0,2])
//2* mergeSort([1,3])
export default function mergeSort(array) {
  let result
  if(array.length < 1){
    // console.log('Error: array is empty', array)
  }
  if(array.length === 1){
    // console.log('array length = 1', array)
    result = array
  }
  let subArrayOne = []
  let subArrayTwo = []
  if(array.length > 1) {
    // console.log('array.length is: ', array.length)
    let halvedArrayLength = ( array.length / 2 )
    for (let i = halvedArrayLength; i > 0; i--){
      subArrayTwo.push(array.pop())
    }
    // console.log('subArrayTwo at creation', subArrayTwo)
    //1* s2 = [0,2]
    //2* s2 = [3]


    subArrayOne = array
    // console.log('subArrayOne at creation', subArrayOne)
    //1* s1 = [1,3]
    //*2 s1 = [1]
    subArrayOne = mergeSort(subArrayOne)
    // console.log('subArrayOne', subArrayOne)
    // [1,3]
    //*2 [1]
    subArrayTwo = mergeSort(subArrayTwo)
    // console.log('subArrayTwo', subArrayTwo)
    // [0,2]
    //*2 [3]
  }
  // console.log('result for return', result)
  return merge(subArrayOne, subArrayTwo)
}
