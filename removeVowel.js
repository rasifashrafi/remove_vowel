function removeVowels(str) {
    if (!str && str === "") {
        return "";
    }
    const char = str.charAt(0);
    if ((char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' )) {
        return  "" + removeVowels(str.substring(1));
    }
    return  char + removeVowels(str.substring(1));
 }
 console.log(removeVowels('education'));
 console.log(removeVowels('upper'));
 console.log(removeVowels(''));
 console.log(removeVowels('tyr'));