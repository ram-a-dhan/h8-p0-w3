function balikString(str) {
    var newstr = '';
    for (i = str.length-1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}

var input1 = 'Hello World!';
console.log(`\"${input1}\" dibalik jadi \"${balikString(input1)}\"`);

var input2 = 'JavaScript';
console.log(`\"${input2}\" dibalik jadi \"${balikString(input2)}\"`);

var bonus = 'Semangkok Mie Ayam';
console.log(`${bonus} dibalik jadi tumpah :(`);
