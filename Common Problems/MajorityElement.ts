{const arr = [2, 2, 1, 1, 1, 2, 2];

const findMajorityElem = (arr: number[]) => {
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arrMap.has(arr[i])) {
      arrMap.set(arr[i], arrMap.get(arr[i]) + 1);
    } else {
      arrMap.set(arr[i], 1);
    }
  }
  let result = arr[0]
  let maxVal = 0

  for(let [key,value] of arrMap){
if(value > maxVal){
    maxVal = value;
    result = key
}
}
console.log(result);
};

findMajorityElem(arr)}