/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 *
 */

//// PSEUDOCODE (turn off the // signs on the pseudocode lines to read it with syntax highlighting)
// // STEP 01 - COUNTING FOUND TARGET MINERALS
// DECLARE AND ASSIGN 2-dimensional array "miningResult" w/ zero counters for each target mineral type
// FOR 0 <= i < mine.length
// 	FOR 0 <= j < mine[j].length
// 		FOR 0 <= x < miningResult.length
// 			IF mine[i][j] EQUALS miningResult[x] first letter of target mineral type
// 				miningResult[x] counter++ of coresponding target mineral type
// 			ENDIF
// 		ENDFOR
// 		steps--
// 		IF steps EQUALS 0 THEN break; ENDIF
// 	ENDFOR
// 	IF steps EQUALS 0 THEN break; ENDIF
// ENDFOR

// // STEP 02 - REMOVING TARGET MINERALS WITH ZERO COUNTERS
// FOR 0 <= z < miningResult.length
// 	IF miningResult[z] counter EQUALS 0 
// 		SPLICE "miningResult" to remove one element at z index
// 		z--
// 	ENDIF
// ENDFOR

// // STEP 03 - FINAL
// RETURN or PRINT miningResult
////

function mineCraft(mine, steps) {

	//// DEPRECATED CODE
	// var minedMinerals = [], targetMinerals = ['copper','silver','gold','diamond'];
	// for (i = 0; i < mine.length; i++) {
	// 	for (j = 0; j < mine[i].length; j++) {
	// 		var knownMineral = -1;
	// 		for (x = 0; x < targetMinerals.length; x++) {
	// 			if (mine[i][j] === targetMinerals[x][0]) {
	// 				knownMineral = targetMinerals[x];
	// 				// console.log(knownMineral);
	// 			}
	// 		}
	// 		if (knownMineral !== -1) {
	// 			minedMinerals.push(knownMineral);
	// 		}
	// 		steps--;
	// 		if (!steps) {break;}
	// 	}
	// 	if (!steps) {break;}
	// }
	// var miningResult = [];
	// for (x = 0; x < minedMinerals.length; x++) {
	// 	var existsInList = -1;
	// 	for (y = 0; y < miningResult.length; y++) {
	// 		if (minedMinerals[x] === miningResult[y][1]) {
	// 			existsInList = y;
	// 		}
	// 	}
	// 	if (existsInList === -1) {
	// 		miningResult.push([1,minedMinerals[x]]);
	// 	} else {
	// 		miningResult[existsInList][0]++;
	// 	}	
	// }
	// return miningResult;
	////

	var miningResult = [[0,'copper'],[0,'silver'],[0,'gold'],[0,'diamond']];
	for (i = 0; i < mine.length; i++) {
		for (j = 0; j < mine[i].length; j++) {
			for (x = 0; x < miningResult.length; x++) {
				if (mine[i][j] === miningResult[x][1][0]) { 
					miningResult[x][0]++;
				}
			}
			steps--;
			if (!steps) {break;}
		}
		if (!steps) {break;}
	}

	for (z = 0; z < miningResult.length; z++) {
		if (miningResult[z][0] === 0) {
			miningResult.splice(z,1);
			z--;
		}
	}
	return miningResult;
}
var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]
var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// [[2, copper], [1, diamond]]
var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]