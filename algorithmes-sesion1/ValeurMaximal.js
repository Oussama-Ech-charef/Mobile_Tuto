let table = [12, 13, 14, 1 , 16];
let Max = table[0];
for (let i = 0; i < table.length; i++) {
    if (table[i] > Max) {
        Max = table[i];
    }
}
console.log(Max);