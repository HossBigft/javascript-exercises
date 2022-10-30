function revertString(string){
    if(string===''){
        return '';
    }
    return revertString(string.substring(1)) + string.charAt(0);
}
function removeSpecialChars(str) {
    return str.replace(/(?!\w|\s)./g, '')
      .replace(/\s+/g, ' ')
      .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2')
      .replace(/\s/g, "");
  }
const palindromes = function (string) {
    let comparedString= removeSpecialChars(string).toLowerCase();
    if(comparedString===revertString(comparedString)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
