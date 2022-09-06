function checkCashRegister(price, cash, cid) {
  const cidCopy = cid.map((x) => x);
  let output = {status: "", change: []};
  let change = cash - price;
  let deltaChange;
  let unit;
  let unitCheck = 8;
  let numOfUnit;
  let numOfChangeForUnit;
  let cashInDrawerLeft = cidCopy.reduce((sum, item) => sum + item[1], 0);

  let numOfPenny = cid.filter((item) => {
    return item[0] === "PENNY";
  })[0][1]/0.01;
  let numOfNickel = cid.filter((item) => {
    return item[0] === "NICKEL";
  })[0][1]/0.05;
  let numOfDime = cid.filter((item) => {
    return item[0] === "DIME";
  })[0][1]/0.1;
  let numOfQuarter = cid.filter((item) => {
    return item[0] === "QUARTER";
  })[0][1]/0.25;
  let numOfOne = cid.filter((item) => {
    return item[0] === "ONE";
  })[0][1];
  let numOfFive = cid.filter((item) => {
    return item[0] === "FIVE";
  })[0][1]/5;
  let numOfTen = cid.filter((item) => {
    return item[0] === "TEN";
  })[0][1]/10;
  let numOfTwenty = cid.filter((item) => {
    return item[0] === "TWENTY";
  })[0][1]/20;
  let numOfOneHundred = cid.filter((item) => {
    return item[0] === "ONE HUNDRED";
  })[0][1]/100;

  while (change > 0 && unitCheck >= 0 && cashInDrawerLeft > 0){
    unit = undefined;

    if (change >= 100 && unitCheck === 8){
      deltaChange = 100;
      unit = "ONE HUNDRED";
      numOfUnit = numOfOneHundred;
    }

    else if (change >= 20 && unitCheck === 7){
      deltaChange = 20;
      unit = "TWENTY";
      numOfUnit = numOfTwenty;
    }

    else if (change >= 10 && unitCheck === 6){
      deltaChange = 10;
      unit = "TEN";
      numOfUnit = numOfTen;
    }

    else if (change >= 5 && unitCheck === 5){
      deltaChange = 5;
      unit = "FIVE";
      numOfUnit = numOfFive;
    }

    else if (change >= 1 && unitCheck === 4){
      deltaChange = 1;
      unit = "ONE";
      numOfUnit = numOfOne;
    }

    else if (change >= 0.25 && unitCheck === 3){
      deltaChange = 0.25;
      unit = "QUARTER";
      numOfUnit = numOfQuarter;
    }

    else if (change >= 0.1 && unitCheck === 2){
      deltaChange = 0.1;
      unit = "DIME";
      numOfUnit = numOfDime;
    }

    else if (change >= 0.05 && unitCheck === 1){
      deltaChange = 0.05;
      unit = "NICKEL";
      numOfUnit = numOfNickel;
    }

    else if (change >= 0.01 && unitCheck === 0){
      deltaChange = 0.01;
      unit = "PENNY";
      numOfUnit = numOfPenny;
    }

    numOfChangeForUnit = numOfUnit;

    if (numOfChangeForUnit <= 0){
      unit = undefined;
    }

    if (unit != undefined){
      for (let i = 1; i <= numOfUnit; i++){
        if (change - (deltaChange * i) < deltaChange){
          numOfChangeForUnit = i;
          break;
        }
      }

      change -= (deltaChange * numOfChangeForUnit);
      cidCopy[unitCheck][1] -= (deltaChange * numOfChangeForUnit);
      change = change.toFixed(2);
      output.change.push([unit, numOfChangeForUnit * deltaChange]);
      cashInDrawerLeft = cidCopy.reduce((sum, item) => sum + item[1], 0);
    }

    unitCheck -= 1;
  }

  if (change > 0){
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
  }

  else if (change == 0){
    if (cashInDrawerLeft == 0){
      output.status = "CLOSED";
            
      for (let i = 0; i < cidCopy.length; i++){
        let outputChangeUnits = output.change.map((item) => {
          return item[0];
        })
        let cidCopyNew = cidCopy.filter((item) => {
          return !outputChangeUnits.includes(item[0]);
        }) 

        for (let i = 0; i < cidCopyNew.length; i++){
          output.change.push(cidCopyNew[i]);
        }
      }
    }
  
    else{
      output.status = "OPEN";
    }
  }

  return output;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);