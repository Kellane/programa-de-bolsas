let num = [5, 8, 2, 9, 3];

num.push(1)
num.sort()
console.log(num);
console.log(`O vetor tem ${num.length} posiçoes`);

for(var index = 0; num.length > index; index++ ) { 
    console.log(num[index]);
}

for(var index in num ) {
    console.log(num[index]);
}


