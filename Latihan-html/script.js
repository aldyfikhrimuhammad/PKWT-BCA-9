console.log("Tugas Logic Javascript")

// Nomor 1 - n = 9, x === y
function nomorSatu(n) {
    let hasil = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                hasil += "*";
            } else {
                hasil += " ";
            }
        }
        hasil += "\n";
    }
    return hasil;
}

console.log("Nomor 1 :");
console.log(nomorSatu(9));

// Nomor 3 - n = 9, x === y
// function nomorTiga(n) {
//     let hasil = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j && j === i) {
//                 hasil += "*";
//             } else {
//                 hasil += " ";
//             }
//         }
//         hasil += "\n";
//     }
//     return hasil;
// }

// console.log(nomorTiga(9));

// Nomor 5 - n = 9, x === y
function nomorLima(n) {
    let hasil = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j || i + j == n - 1 || i == 0 || i == n - 1 || j == 0 || j == n - 1)
                hasil += "*";
            else
                hasil += " ";
        }
        hasil += "\n";
    }
    return hasil;
}

console.log("Nomor 5 :");
console.log(nomorLima(9));

// Nomor 7

// Nomor 9
function nomorSembilan(n) {
    let hasil = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < (2 * n); j++) {
            if (i >= j) {
                hasil += "*";
            } else {
                hasil += " ";
            }
            if (i >= (2 * n - 1) - j) {
                hasil += "*";
            } else {
                hasil += " ";
            }
        }
        hasil += "\n";
    }
    for (i = 0; i < n; i++) {
        for (j = 0; j < (2 * n); j++) {
            if (i + j <= n - 1) {
                hasil += "*";
            } else {
                hasil += " ";
            }
            if ((i + n) <= j) {
                hasil += "*";
            } else {
                hasil += " ";
            }
        }
        hasil += "\n";
    }
    return hasil
}

console.log("Nomor 9 :");
console.log(nomorSembilan(9));


