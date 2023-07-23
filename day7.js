function findOverlap(str1, str2) {
    let overlap = '';
    let minLength = Math.min(str1.length, str2.length);
  
    for (let i = 1; i <= minLength; i++) {
      if (str1.slice(-i) === str2.slice(0, i)) {
        overlap = str1.slice(-i);
      }
    }
  
    return overlap;
  }
  
  function join(arr) {
    let result = arr[0];
    let minOverlap = Infinity;
  
    for (let i = 1; i < arr.length; i++) {
      const overlap = findOverlap(result, arr[i]);
      minOverlap = Math.min(minOverlap, overlap.length);
      result += arr[i].slice(overlap.length);
    }
  
    return [result, minOverlap];
  }
  
  // Test cases
  console.log(join(["oven", "envier", "erase", "serious"])); // ➞ ["ovenvieraserious", 2]
  console.log(join(["move", "over", "very"])); // ➞ ["movery", 3]
  console.log(join(["to", "ops", "psy", "syllable"])); // ➞ ["topsyllable", 1]
  console.log(join(["aaa", "bbb", "ccc", "ddd"])); // ➞ ["aaabbbcccddd", 0]
      