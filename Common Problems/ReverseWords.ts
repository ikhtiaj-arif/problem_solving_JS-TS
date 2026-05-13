{const str = "Hello World From Bangladesh";

const reverseWord = (str: string): string => {
  const strArr = str.split(" "); //* linear complexity O(n)
  let resultArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) { //* linear complexity O(n)
    resultArr.push(strArr[i]);
  }
  return resultArr.join(" "); //* linear complexity O(n)
};

console.log(reverseWord(str));
//? overall linear complexity O(n)
}