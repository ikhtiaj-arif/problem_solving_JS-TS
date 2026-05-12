const arr = [1, 2, 3, 4, 5];
const target = 6;

//? Need to find all every pair thats sum is equal to target;

// create a result array
// create a map containing all numbers of an array
// calculate the difference of target - i th index
// 6  - 1 = 5 --> 1, 5
// 6  - 2 = 4 --> 2, 4
// 6  - 3 = 3 --> 3, 3
// 6  - 4 = 2 --> 4, 2 -- [2, 4]
// 6  - 5 = 1 --> 5, 1 -- [1, 5]
// check if the diff exists in the map
// if exists then get the key and value and push inside result

const findPairs = (arr: number[], target: number): number[][] => {
  console.log(arr, target);

  //* create diff map
  const difMap = new Map();
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (difMap.has(diff)) {
      result.push([diff, difMap.get(diff)]);
    } else {
      difMap.set(arr[i], diff);
    }
  }
  return result;
  //   console.log(difMap);
};

console.log(findPairs(arr, target));
