function hitungJumlahKata(kalimat) {
    
    // the quick way
    // let kata = kalimat.split(' '); 
    // return kata.length;

    // the "trying too hard to impress your friends and instructors" way
    let kata = [], spasi = [];
    
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            spasi.push(i);
        }
    }
    spasi.unshift(-1);
    spasi.push(kalimat.length);
    for (j = 0; j < spasi.length-1; j++) {
        kata.push(kalimat.slice(spasi[j]+1,spasi[j+1]));
    }
    // return kata.length;
    return `The sentence \"${kalimat}\" has ${kata.length} words`;

  }
  
  // TEST CASES
  console.log('');
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  console.log('');