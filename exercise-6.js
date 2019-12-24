function angkaPalindrome(num) {

    // declaring necessary variables that shouldn't be redeclared in loopings
    let arrnum = [];
    let len;
    let wtf; // short for "Whether True or False"

    
    // looping for checking number palindromity
    do {
        wtf = [];
        num++; // because the point of this function is to find the next palindrome other than the original number
        // console.log(num);
        arrnum = num.toString().split(''); // number parsed in array form to be able to be checked digit-by-digit
        len = Math.floor(arrnum.length/2); // half-length of number digit count
        for (i = 0; i < len; i++) { 
            // console.log(arrnum);
            if (arrnum[i] === arrnum[arrnum.length-1-i]) {  // first element will be compared to last element
                wtf.push(true)                              // second element will be compared to next-to-last element
            } else {                                        // and so on
                wtf.push(false) // a true indicator for each digit check that indicates palindromity between two mirroring digits
            }                   // a false indicator for vice versa
        }
        // console.log(wtf);
    } while (wtf.indexOf(false) > -1) // as long as number does not fulfill mirroring values requirement this while loop will keep on looping
    
    console.log(`Next palindrome for ${num}?`);
    return num;
}

// TEST CASES
  console.log('');
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log('');