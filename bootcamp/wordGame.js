export function longestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
      if ( longest.length <= words[i].length ) {
        longest = words[i];
      }
    }
    return longest;
  };

  export function shortestWord(sentence) {
    const words = sentence.split(/\s+/).filter(Boolean);
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length <= shortest.length) {
        shortest = words[i].toLowerCase();
      }
    }
    return shortest;
  };
  
  export function wordLength(sentence) {
    const words = sentence.split(" ");
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
  };
  