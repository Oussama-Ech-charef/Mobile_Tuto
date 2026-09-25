let numbers = [4, 7, 2, 7, 9, 4, 5, 6, 5];

let numbers_rep = [];

for (let index = 0; index < numbers.length; index++) {
        for (let j = 0; j < numbers.length; j++) {
                if (numbers[index] === numbers[j] && index !==j) {
                        let numb_pr = false;
                        for (let k = 0; k < numbers_rep.length; k++) {
                                if (numbers_rep[k] === numbers[index]) {
                                        numb_pr = true;
                                }
                                
                        }
                        if (numb_pr === false) {
                                numbers_rep[numbers_rep.length] = numbers[index];
                        }
                        
                }            
        }
}
console.log(numbers_rep);

