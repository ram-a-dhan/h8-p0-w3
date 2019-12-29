function tentukanDeretGeometri(arr) {
    
    if (arr.length < 3) {
        return 'Insufficient Data!'; // this function won't work without at least 3 elements
    }

    let mult = arr[1] / arr[0]; // determining geometric multiplier
    // console.log(mult);
    let trfl = []; // True or False
    for (i = 2; i < arr.length; i++) { // loop index starts at 2 
        if (arr[i] / arr[i-1] === mult) { // comparing the multiplier with 3rd element divided by 2nd element and so on
            trfl.push(true);
        } else {
            trfl.push(false); // adds false value to checklist array
        }
    }
    // console.log(trfl);
    return trfl.indexOf(false) > -1 ? false : true; // if checklist array has at least 1 false then parameter is not a geometric sequence
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false