let numberBin = '100';
let sizeNumberBin = numberBin.length;
let sum = 0;

function conBin (n, s){
    
    if(s <= 0){
        console.log(sum);
        return sum;
    } else {
        
        sum += parseInt(n[s - 1], 2) * Math.pow(2, n.length - s);
        console.log("else " + sum);
        let cont = s - 1; 
        conBin(n, cont);
    }
    //console.log(sum);
    return sum;
}

let a = conBin(numberBin, sizeNumberBin);
console.log(a);