{const str = "programming"

// set only keeps unique values
// we can convert the string into array,
// set the array to a set to remove duplicates
// join and return 

const removeDuplicate = (str:string):string => {
    const strArr = str.split("")
    const setArr = new Set(strArr)
    return [...setArr].join("")
}
console.log(removeDuplicate(str));}