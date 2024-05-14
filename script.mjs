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

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function stringsLongerThan(arr,num){
    let newArr =[];
    for(let i = 0 ; i <arr.length; i++){
        if(arr[i].length > num) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);

}

stringsLongerThan(['say','hello','in','the','morning'],3);

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function recursion(n){
    if(n>=1){
        console.log(n);
        recursion(n-1);
    }
}

recursion(5);

//Part 2 Thinking Methodically

function testData(arr){
    //Sort the array by age
    arr.sort((a, b) => a.age - b.age)

    console.log(arr);

    //Filter the array to remove entries with an age greater than 50.
    const newArr = arr.filter((arr1) => arr1.age <= 50);
    console.log(newArr);

    //Map the array to change the “occupation” key to “job” and increment every age by 1.
    const modifiedArr = arr.map((arr2 => ({
        job:arr2.occupation,
        age: (arr2.age) + 1
    })));

    console.log(modifiedArr);



}

testData([{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]);