function capitalize(str) {
    let capStr = "";
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (str[i - 1] === " " || str[i - 1] === undefined)
        capStr += letter.toUpperCase();
      else capStr += letter;
    }
    return capStr;
}

console.log(capitalize('молодость всё простит'));