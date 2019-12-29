function groupAnimals(animals) {
    
    var abc = [];
    for (p = 0; p < animals.length; p++) { // generating alphabet index array from parameter
        abc.push(animals[p][0]);
        
    }
    // console.log(abc);

    var tmp;
    for (q = 0; q < abc.length-1; q++) { // ascending bubble-sort for alphabet index array
        for (r = 0; r < abc.length-1-q; r++) {
            if (abc[r] > abc[r+1]) {
                tmp = abc[r];
                abc[r] = abc[r+1];
                abc[r+1] = tmp;
            }
        }
    }
    // console.log(abc);
    
    let s = 0;
    while (s < abc.length-1) { // removing duplicate alphabet index elements
        if (abc[s] === abc[s+1]) {
            abc.splice(s+1,1);
        } else {
            s++;
        }
    }
    // console.log(abc);

    var zoo = [], typ = [];
    for (t = 0; t < abc.length; t++) { // inserting parameter elements to new multidimensional array categorised using alphabet index array
        typ = [];
        for (u = 0; u < animals.length; u++) {
            if (animals[u][0] === abc[t]) {
                typ.push(animals[u]);
            }
        }
        zoo.push(typ);
    }
    return zoo;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// // CUSTOM TEST CASE
// // source:
// // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// // credits to:
// // https://stackoverflow.com/users/164392/csharptest-net
// // https://stackoverflow.com/users/1895094/jake
// function rdm(len) {
//     var str           = '';
//     var chr       = 'abcdefghijklmnopqrstuvwxyz';
//     for ( var i = 0; i < len; i++ ) {
//        str += chr.charAt(Math.floor(Math.random() * chr.length));
//     }
//     return str;
// }
// var gen = [];
// for (let i = 0; i < 100; i++) {
//     gen.push(rdm(8));
// }
// // console.log(gen);
// console.log(groupAnimals(gen));