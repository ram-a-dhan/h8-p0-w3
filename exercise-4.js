function dataHandling2(arr) {
    // OUTPUT 1
    arr.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
    arr.splice(4,1,'Pria','SMA Internasional Metro');
    console.log(arr);

    // OUTPUT 2
    let date = arr[3].split('/');
    let month = '';
    switch (date[1]) {
        case '01':
            month = 'Januari';
            break;
        case '02':
            month = 'Februari';
            break;
        case '03':
            month = 'Maret';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'Mei';
            break;
        case '06':
            month = 'Juni';
            break;
        case '07':
            month = 'Juli';
            break;
        case '08':
            month = 'Agustus';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Oktober';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'Desember';
            break;
        default :
            month = 'ERROR: INVALID MONTH';
            break;
    }
    console.log(month);

    // OUTPUT 3
    
    var tmp;
    for (i = 0; i < date.length-1; i++) {
        for (j = 0; j < date.length-1-i; j++) {
            if (Number(date[j]) < Number(date[j+1])) { // ascending bubble sort
                tmp = date[j];
                date[j] = date[j+1];
                date[j+1] = tmp;
            }
        }
    }
    console.log(date);
    
    // OUTPUT 4
    let year = date.shift();
    date.push(year);
    let tgl = date.join('-');
    console.log(tgl);

    // OUTPUT 5
    let nama = arr[1].substr(0,15);
    console.log(nama);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log('');
console.log('Input:');
console.log(input);
console.log('');
console.log('Output:');
dataHandling2(input);
console.log('');

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
