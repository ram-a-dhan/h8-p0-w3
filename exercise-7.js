function hitungJumlahKata(kalimat) {
    
    let kata = '', kata2 = [];
    
    //// the .split method
    // let kata = kalimat.split(' '); 
    // return kata.length;
    ////

    for (i = 0; i <= kalimat.length; i++) {
        if (kalimat[i] === ' ' || i === kalimat.length) {
            kata2.push(kata);
            kata = '';
        } else {
            kata += kalimat[i];
        }
    }
    // return kata2.length;
    console.log(`Word count for \"${kalimat}\":`);
    return kata2.length;
  }
  
  // TEST CASES
  console.log('');
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  console.log('');