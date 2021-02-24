function binarySearch( arr, elem ) {
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor( ( start + end ) / 2 )
    while ( arr[ middle ] !== elem ) {
        if ( elem < arr[ middle ] ) {
            end = middle -1
        } else {
            start = middle +1
        }
        middle = Math.floor((start+end)/2)
    }
    console.log( start, middle, end )
    return middle
}
const mia = binarySearch( [ 1, 2, 3, 4, 5, 6, 7, 8 ],8 )
console.log(mia)