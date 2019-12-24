function pasanganTerbesar(num) {
    
    let arrnum = num.toString().split(''); // parsing the digits into new array as strings
    let pasangan = [];

    for (i = 0; i < arrnum.length-1; i++) {
        pasangan.push(Number(arrnum[i] + arrnum[i+1])); // putting digit couples into another array back as numbers
    }
    // return pasangan;
    
    //// the math max value method
    // return Math.max(...pasangan);

    //// the built-in sort function method
    // pasangan.sort(function(a,b) {return a-b;});
    // // return pasangan;
    // return pasangan[pasangan.length-1];

    //// the manual ascending bubble-sort method
    let tmp;
    for (i = 0; i < pasangan.length-1; i++) {
        for (j = 0; j < pasangan.length-1-i; j++) {
            if (pasangan[j] > pasangan[j+1]) {
                tmp = pasangan[j];
                pasangan[j] = pasangan[j+1];
                pasangan[j+1] = tmp;
            }
        }
    }
    // return pasangan;
    console.log(`Pasangan angka terbesar dari ${num} adalah:`)
    return pasangan[pasangan.length-1];

  }
  
  // TEST CASES
  console.log('');
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log('');