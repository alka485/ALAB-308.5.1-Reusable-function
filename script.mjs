// Part 1: Thinking Functionality

//Take an array of numbers and return the sum.
function sumOfArray (arr) {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }

    //console.log(sum);

}

sumOfArray([1,2,3,4]);

//Take an array of numbers and return the average.

function avgOfArray (arr) {
    let sum = 0;
    let num = arr.length;
    for (let i = 0 ; i <arr.length; i++){
        sum += arr[i]
    }

    let avg = sum / num;

    //console.log(avg);
}

avgOfArray([1,2,3,4]);

//Take an array of strings and return the longest string.

function longestString (arr) {
     let longest;
     let lgth = 0
    for(let i = 0 ; i < arr.length; i++){       
        if(arr[i].length > lgth){
            lgth = arr[i].length;
            longest = arr[i]
        }
    }

    console.log(longest);
}

longestString(["me","you","hello"]);