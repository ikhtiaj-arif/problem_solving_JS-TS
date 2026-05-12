const arr = [1, 2, 3, 2, 1];
// we can reverse and join then compare both array
// but it creates 2 different array, increasing space complexity

// two pointer solution do not create extra array reducing space complexity 
const isArrPalindrome = (arr: number[]) => {
  const reverse = [...arr].reverse().join("");
  if (reverse === arr.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isArrPalindrome(arr));
