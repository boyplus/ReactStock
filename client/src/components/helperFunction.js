export const moneyToString = money => {
    let newString = '';
    let cnt = 0;
    money += '';
    let start = money.length - 1;
    for (let i = start; i >= 0; i--) {
        if (money[i] === '.') {
            start = i - 1;
            break;
        }
    }
    if (start !== money.length - 1) {
        for (let i = money.length - 1; i > start; i--) {
            newString = money[i] + newString;
        }
    }
    for (let i = start; i >= 0; i--) {
        newString = money[i] + newString;
        cnt++;
        if (cnt % 3 === 0 && i !== 0) newString = ',' + newString;
    }
    return newString;
};
