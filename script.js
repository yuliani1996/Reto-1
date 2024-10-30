
const alfabeto = 'abcdefghijlmnopqrstuvwxyz'; 

const mensajeCifrado = '^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{( )¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~';

function desencriptar(mensaje) {
    const mapeo = {
        '?': 'A',
        '%': 'B',
        '`': 'C',
        '¡': 'D',
        '[': 'E',
        ';': 'F',
        '-': 'H',
        '\\': 'I', 
        '!': 'J',
        '/': 'L',
        '^': 'M',
        ']': 'N',
        '~': 'O',
        '¬': 'ó',
        '*': 'P',
        '}': 'Q',
        '$': 'R',
        '{': 'S',
        '=': 'T',
        '+': 'U',
        '#': 'V',
        '¿': 'Y',
        '_':'Z',
        '(': ' ',
        ')': ' ',
    };

    let mensajeDesencriptado = '';

    for (let char of mensaje) {
        if (mapeo[char]) {
            mensajeDesencriptado += mapeo[char];
        } else {
            mensajeDesencriptado += char;
        }
    }

    return mensajeDesencriptado;
}


const resultado = desencriptar(mensajeCifrado);
document.getElementById('resultado').innerText = resultado;





