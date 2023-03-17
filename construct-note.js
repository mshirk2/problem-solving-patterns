function freqCount(str){
    let freq = {};

    for(let char of str){
        freq[char] = freq[char] + 1 || 1;
    }
    return freq;
}

function constructNote(msg, letters){
    let msgFreq = freqCount(msg);
    let letterFreq = freqCount(letters);

    for (let char in msgFreq){
        if (!letterFreq[char]) return false;
        if (msgFreq[char] > letterFreq[char]) return false;
    }
    return true;
}