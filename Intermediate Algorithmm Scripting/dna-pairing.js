function pairElement(str) {
  let base;
  let output = [];

  for (let i = 0; i < str.length; i++){
    base = str[i];

    if (base === "A"){
      output.push(["A", "T"]);
    }
    
    else if (base === "T"){
      output.push(["T", "A"]);
    }

    else if (base === "C"){
      output.push(["C", "G"]);
    }

    else if (base === "G"){
      output.push(["G", "C"]);
    }
  }

  return output;
}

pairElement("GCG");