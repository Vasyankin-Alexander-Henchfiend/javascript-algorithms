function findVowels(str) {
    const vowelList = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let vowelTotal = 0;

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if(vowelList.indexOf(letter.toLowerCase()) !== -1)
        vowelTotal++;
    }
    return vowelTotal;
}



console.log(findVowels('здравствуй'));
console.log(findVowels('привет'));
console.log(findVowels('хеллоу'));