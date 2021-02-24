//this is only used for sorted array 
function binarySearch( arr, elem ) {
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor( ( start + end ) / 2 )
    while ( arr[ middle ] !== elem && start <= end ) {
        if ( elem < arr[ middle ] ) {
            end = middle -1
        } else {
            start = middle +1
        }
        middle = Math.floor((start+end)/2)
    }
    return arr[ middle ] === elem ? middle : -1
}
const mia = binarySearch( [ 2, 5, 6, 9, 13, 15, 28, 30 ], 15 )
console.log(mia)