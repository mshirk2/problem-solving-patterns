function freqCount(num){
    let freq = {};
    str = num.toString();

    for(let char of str){
        freq[char] = freq[char] + 1 || 1;
    }
    return freq;
}

function sameFrequency(num1, num2) {
    num1Freq = freqCount(num1);
    num2Freq = freqCount(num2);

    if (num1Freq.length !== num2Freq.length) return false;

    for (let key in num1Freq){
        if (num1Freq[key] !== num2Freq[key]) return false;
    }

    return true;
}
