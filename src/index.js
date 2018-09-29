module.exports = function check(str, bracketsConfig) {
    let firstBracket = [];
    let lastBracket = [];
    let massiv = [];

    for (let i = 0; i < str.length; i++) {
        massiv.push(str[i]);
    }
    if (massiv.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
        firstBracket.push(bracketsConfig[i][0]);
        lastBracket.push(bracketsConfig[i][1]);
    }
    
    for (let i = massiv.length - 1; i >= 0; i--) {
            for (let a = 0; a < firstBracket.length; a++) {
                if (massiv[i] === firstBracket[a] && massiv[i + 1] === lastBracket[a]) {
                    massiv.splice(i, 2);
                }
            }
    }
    return (massiv.length === 0);
}
