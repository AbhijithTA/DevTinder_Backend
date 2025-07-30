function countVowels(str){
    let count = 0;
    for (let i =0; i < str.length; i++){
        const ch = str[i].toLowerCase();
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            count++;
        }   
    }
    return count;
}

console.log(countVowels('Hello World')); 