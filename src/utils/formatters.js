export const formatPrice = float => {
    let int = parseInt(float).toString();
    let arr = [];
    let newArr = [];
    for(let i = int.length-1 ; i >= 0 ; i--){
        arr.push(int[i])
    };
    for(let i = 1; i <= arr.length; i++){
        newArr.push(arr[i-1]);
        if(i%3 === 0 && i !== arr.length){
            newArr.push(',')
        }
    };
    arr = newArr;
    arr = arr.reverse();
    return arr.join('') + '.' + (float.toString().split('.')[1] || '00');

}

export const formatOff = (float, d) => {
    return `-${Math.round(float * (10 ** (d+2))) / (10 ** d)}%`
}