let table = [8, 3, 6, 1, 5];


for (let index = 0; index < table.length; index++) {
    for (let j = 0; j < table.length -1; j++) {
        if (table[j] > table[j+1]) {


            let temporaire = table[j];

            table[j] = table[j+1];

            table[j+1] = temporaire;




            

        }
        
    }
    
    
}

            console.log(table);