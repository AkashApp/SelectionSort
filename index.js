// Selection Sort algorithm Ascending order
// check

const selectionSortAsc = (arr) => {
    let n= arr.length;
    for(let i=0; i<n-1; i++){
        let minIndex= i;
        for(let j=i+1; j<n; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }
    return arr;
}

// Selection Sort algorithm Descending order

const selectionSortDsc = (arr) => {
    let n= arr.length;
    for(let i=0; i<n-1; i++){
        let maxIndex= i;
        for(let j=i+1; j<n; j++){
            if(arr[maxIndex] < arr[j]){
                maxIndex = j;
            }
        }
        if(maxIndex !== i){
            [arr[maxIndex], arr[i]] = [arr[i], arr[maxIndex]];
        }
    }
    return arr;
}

let array = [10,24,12,37,10,40,21];
console.log(selectionSortAsc(array));
console.log(selectionSortDsc(array));

// Time Complexity = O(n^2)
// Space Complexity = O(1)