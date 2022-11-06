

function palindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('') ? true : false;
};


console.log(palindrome('топот'));
console.log(palindrome('Saippuakivikauppias')); 
console.log(palindrome('привет'));
