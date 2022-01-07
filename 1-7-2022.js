/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const numCount = {};
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    for(let letter of alpha){
        numCount[letter] = 0;
    }
    for(let letter of s){
        if (letter !== " "){
            letter = letter.toLowerCase();
            numCount[letter] += 1;
        }
    }
    let missingLetters = 0; 
    Object.values(numCount).map(value=>{
        if(value < 1){
            missingLetters++;
        }
    })
    if(missingLetters === 0){
       return "pangram";
    }else{
        return "not pangram";
    }
}
//string Xors in python
def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i] and s[i] == '1':
            res += '0';
        elif s[i] != t[i] and (s[i] == '1' or t[i] == '1'):
            res += '1';
        else:
            res += '0';
    return res
