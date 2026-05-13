{const arr = [1, 2, 3, 2, 1];
// we can reverse and join then compare both array
// but it creates 2 different array, increasing space complexity
const isArrPalindrome1 = (arr: number[]) => {
  const reverse = [...arr].reverse().join("");
  if (reverse === arr.join("")) {
    return true;
  } else {
    return false;
  }
};

// two pointer solution do not create extra array reducing space complexity
//? 2 pointers --> one points the start of the array, another points the end of the array
//? the condition is to check if start is equal to end or not
//? if start is not equal to end return false and break the condition
//? other wise increment start, decrement end and keep the loop going
//? if the loop ends return true

const isArrPalindrome = (arr: number[]):boolean => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
console.log(isArrPalindrome(arr));
}