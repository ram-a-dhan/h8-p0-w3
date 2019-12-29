function tentukanDeretAritmatika(arr) {
    
    if (arr.length < 3) {
        return 'Insufficient Data!'; // this function won't work without at least 3 elements
    }

    let diff = arr[1] - arr[0]; // determining arithmetic increment
    // console.log(diff);
    let trfl = []; // True or False
    for (k = 2; k < arr.length; k++) { // loop index starts at 2 
        if (arr[k] - arr[k-1] === diff) { // comparing the increment with 3rd element substracted by 2nd element and so on
            trfl.push(true);
        } else {
            trfl.push(false); // adds false value to checklist array
        }
    }
    // console.log(trfl);
    return trfl.indexOf(false) > -1 ? false : true; // if checklist array has at least 1 false then parameter is not an arithmetic sequence
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false