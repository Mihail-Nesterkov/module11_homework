function getPercents(percent, number){
    let res = '';
    if (isNaN(percent && number)){
        res = 'вы ввели не число'
    }else if (percent < 0 || number < 0){
        res = 'вы ввели отрицательные значения'
    }else {
        res = percent * number / 100
    }
    return res
}

module.exports = getPercents