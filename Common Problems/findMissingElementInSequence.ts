{
  const arr = [1, 2, 4, 8, 6, 15];

  const findMissingElement = (arr: number[]) => {
    arr.sort();
    const copy = Array.from({ length: arr[arr.length - 1] }, (_, i) => i + 1);
    for (let i = 0; i < arr.length; i++) {
      //   console.log(arr[curr] + 1, arr[i + 1]);
    }
    console.log(arr[arr.length ]);
    // return result;
  };

  findMissingElement(arr);
  //   console.log();
}
