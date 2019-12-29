function targetTerdekat(arr) {
    
    let po, px = [];
    for (i = 0; i < arr.length; i++) { // scanning for positions of 'o' & 'x's
        if (arr[i] === 'o') {
            po = i;
        }
        if (arr[i] === 'x') {
            px.push(i);
        }
    }
    // return [po,px];

    let dist = [];
    for (i = 0; i < px.length; i++) { // calculate distances from 'o' to every 'x'
        // dist.push(Math.abs(po-px[i]));
        if (po > px[i]) {
            dist.push(po-px[i]);
        } else {
            dist.push(px[i]-po);
        }
    }
    // return dist;

    // dist.sort(function(a,b){return a-b});
    let temp;
    for (i = 0; i < dist.length-1; i++) { // ascending bubble-sort for distances data
        for (j = 0; j < dist.length-1-i; j++) {
            if (dist[j] > dist[j+1]) {
                temp = dist[j];
                dist[j] = dist[j+1];
                dist[j+1] = temp;
            }
        }
    }
    // return dist;
    return dist[0] ? dist[0] : 0; // if exists, returns the nearest x distance

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2