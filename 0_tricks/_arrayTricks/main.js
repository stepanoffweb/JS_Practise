const customReverse = array => {
  const lastItemIndex = array.length - 1
  console.log(array.length / 2)
  for (let i = 0; i < array.length / 2; i++) {
    const tempItem = array[lastItemIndex - i]
    array[lastItemIndex - i] = array[i]
    array[i] = tempItem
  }
  return array
}

const myArray = [1, 2, 3, 4, 6, 7, 8, 9]
console.log(customReverse(myArray))

function revArray (arr) {
  const temp = []
  for (i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i])
  }
  return arr = temp
}
console.log(revArray(myArray))
