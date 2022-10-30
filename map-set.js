// Question #1

// const nums = new Set([1,1,2,2,3,4])

// will return {'1','2','3','4'}

// Question #2

// [...new Set("referee")].join("")

// "ref"

// Question #3

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// although the objects look the same they are different so you will have two different objects as keys
// so they will both be part of the map. {Array => true, Array => false}

//Has duplicate

const hasDuplicate = (arr) => {
    const slimArr = new Set([...arr]);
    return [...slimArr].join('') === arr.join('') ? false : true;
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

//vowelCount

const vowelCount = (string) => {
    let wordArr = [...string];
    let vowMap = new Map();
    for(let letter of wordArr){
        if(vowMap.get(letter) >= 1){
            vowMap.set(letter,vowMap.get(letter)+1);
        }
        else if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            vowMap.set(letter,1);
        }
    }
    return vowMap;
}

vowelCount('awesome');