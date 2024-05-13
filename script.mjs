// Part 1: Thinking Functionality

function sumOfArray (arr) {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }

    console.log(sum);

}

sumOfArray([1,2,3,4])