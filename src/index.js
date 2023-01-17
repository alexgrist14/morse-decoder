const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
let dot ='10';
let dash = '11';
let DECODED_MORSE_TABLE = {};

function decodeMorse(letter){
    let arr = letter.replaceAll('.',dot)
    return  arr.replaceAll('-',dash);
}
function removeZeros(stroke){
    return stroke.replaceAll('00','');
}
Object.entries(MORSE_TABLE).forEach(([key,value])=>{
   DECODED_MORSE_TABLE[value] = decodeMorse(key);
});
let obj = {};
Object.entries(DECODED_MORSE_TABLE).forEach(([key,value])=>{
    obj[value] = key;
});

function decode(expr) {
    let output =[];
    let exprTmp = expr;
    for(let i = expr.length/10; i>0; i--){
        if(exprTmp.substring(0,10) === "**********"){
            output.push(" ");
            exprTmp = exprTmp.replace(exprTmp.substring(0, 10), '');
        }
        else {
            output.push(obj[removeZeros(exprTmp.substring(0, 10))]);
            exprTmp = exprTmp.replace(exprTmp.substring(0, 10), '');
        }
    }
    return output.join("");
}
module.exports = {
    decode
}