function palindrome(kata) {

    console.log(`Is the word \"${kata}\" a palindrome?`);

    // defining necessary variables
    let len = Math.floor(kata.length/2);
    let wtf = [];
    
    // looping for checking if string is palindrome
    // by mirror-checking each char and saving each check result in an array
    for (i = 0; i < len; i++) {
        if (kata[i] === kata[kata.length-1-i]) {
            wtf.push(true);
        } else {
            wtf.push(false);
        }
    }

    // deciding if the whole string is palindrome
    // by checking the check result array
    // if the check result array has at least one indication of non-palindromity
    // then the whole string is not a palindrome
    if (wtf.indexOf(false) > -1) {
        return false;
    } else {
        return true;
    }
  }
  
  // TEST CASES
  console.log('');
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log('');