function pasanganTerbesar(num) {
    
    let arrNum = num.toString(); // parsing the number digits as indexable string
    let numCouple = [];
    
    for (i = 0; i < arrNum.length-1; i++) {
        numCouple.push(Number(arrNum[i] + arrNum[i+1])); // putting digit couples into an array back as numbers
    }
    // return numCouple;
    
    //// the math max value method
    // return Math.max(...numCouple);
    ////

    // the built-in sort function method
    // numCouple.sort(function(a,b) {return b - a;});
    // return numCouple[0];
    ////

    let tmp;
    for (i = 0; i < numCouple.length-1; i++) {
        for (j = 0; j < numCouple.length-1-i; j++) {
            if (numCouple[j] < numCouple[j+1]) { // descending bubble sort
                tmp = numCouple[j];
                numCouple[j] = numCouple[j+1];
                numCouple[j+1] = tmp;
            }
        }
    }
    // return numCouple;
    console.log(`Greatest number couple from ${num}:`)
    return numCouple[0];

  }
  
  // TEST CASES
  console.log('');
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log('');