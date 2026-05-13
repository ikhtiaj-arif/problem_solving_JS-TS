{
  const str = "hello";
  const k = 2;

  const rotateString = (str: string, idx: number) => {
    const sliceStr = str.split("");
    let first: string[] = [];
    let second: string[] = [];
    for (let i = 0; i <= idx; i++) {
      first.push(sliceStr[i]);
    }
    for (let i = idx+1; i < sliceStr.length; i++) {
      second.push(sliceStr[i]);
    }
    console.log([...second,...first].join(""));
  };
  rotateString(str, k);
}
