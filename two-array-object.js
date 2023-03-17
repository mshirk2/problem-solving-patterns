function twoArrayObject(keyArr, valArr) {
    let result = {};
    
    for (let i = 0; i < keyArr.length; i++){ 
        valArr[i] ? result[keyArr[i]] = valArr[i] : result[keyArr[i]] = null;
    }
    return result;
}
