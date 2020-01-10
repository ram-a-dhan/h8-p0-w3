function palindrome(kata) {

    // defining necessary variables
    let len = Math.floor(kata.length/2);
    let notPal = 0;
    
    // looping for checking if string is palindrome
    // by mirror-checking each char and saving each check result in an array
    for (i = 0; i < len; i++) {
        if (kata[i] !== kata[kata.length-1-i]) {
            notPal++;
        }
    }

    // deciding if the whole string is palindrome
    // by checking the check result array
    // if the check result array has at least one indication of non-palindromity (notPal > 0)
    // then the whole string is not a palindrome
    var wtf = notPal ? false : true; // wtf = Whether True or False
    return `Is the word \"${kata}\" a palindrome? ${wtf}`;
  }
  
  // TEST CASES
  console.log('');
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log('');