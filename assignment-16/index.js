// Function to multiply each value of an array by ten
function multiplyByTen(myArray) {
    // Use the map() method to create a new array with each element multiplied by 10
    let resultArray = myArray.map((e)=>{
        return e*10
    })
    return resultArray;
}

// Sample Input 1
const input1 = [12, 2, 2, 4, 1];
const output1 = multiplyByTen(input1);
console.log("Sample Output 1:", output1);


// Function to filter out even numbers from an array
function filterEvenNumbers(myArray2) {
    // Use the filter() method to create a new array with only the even numbers
    let resultArray2 = myArray2.filter((e)=>{
        if(e%2===0){
            return e
        }
    })
    return resultArray2;
}

// Sample Input 1
const input2 = [12, 5, 7, 8, 3, 2];
const output2 = filterEvenNumbers(input2);
console.log("Sample Output 2:", output2);