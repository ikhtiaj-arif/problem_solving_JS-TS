const str = "JavaScript";

const findVowel = (str: string): number => {
  const strArr = str.toLocaleLowerCase().split("");
  let count: number = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] === "a" ||
      strArr[i] === "e" ||
      strArr[i] === "i" ||
      strArr[i] === "o" ||
      strArr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(findVowel(str));
