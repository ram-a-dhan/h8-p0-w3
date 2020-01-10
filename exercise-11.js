function tentukanDeretAritmatika(arr) {
    
    if (arr.length < 3) {
        return 'Insufficient Data!'; // function won't work without at least 3 elements to process
    }

    let notArith;
    let diff = arr[1] - arr[0]; // determining arithmetic increment from first two elements
    // console.log(diff);
    for (k = 2; k < arr.length; k++) {
        notArith = 0; // non-arithmetic sequence indicator
        if (arr[k] - arr[k-1] !== diff) { // comparing the increment with 3rd element substracted by 2nd element and so on
            notArith++; // this value increases for each confirmed non-arithmeticity
        }
    }
    // console.log(notArith);
    return notArith ? false : true; // if indicator is not zero (>0) then parameter is not an arithmetic sequence
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false