let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);