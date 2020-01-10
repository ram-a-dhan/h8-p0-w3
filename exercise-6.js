function angkaPalindrome(num) {

    let oriNum = num;
    let strNum = '';
    let len; // half-length of number digit count
    let notPal; // non-palindromity indicator

    do {
        notPal = 0;
        num++; // because the point of this function is to find the next palindrome other than the original number
        // console.log(num);
        strNum = num.toString();
        len = Math.floor(strNum.length/2);
        for (i = 0; i < len; i++) { 
            // console.log(strNum);
            if (strNum[i] !== strNum[strNum.length-1-i]) {  // first element will be compared to last element
                notPal++;                                   // second element will be compared to next-to-last element
            }                                               // and so on
        }
        // console.log(notPal);
    } while (notPal) // as long as notPal is true (notPal > 0), this while loop will keep on looping
    
    return `Next palindrome for ${oriNum} is ${num}`;
}

// TEST CASES
  console.log('');
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log('');