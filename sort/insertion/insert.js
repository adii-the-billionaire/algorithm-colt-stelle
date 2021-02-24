function insertionSort( arr ) {
    for ( var i = 1; i < arr.length; i++ ) {
        var currentVal = arr[ i ]
        for ( var j = i - 1; j >= 0 && arr[ j ] > currentVal; j-- ) {
            arr[ j + 1 ] = arr[ j ]
            //
            console.log('adi')
        }
        //console.log( arr )
        // console.log( j )
       console.log('miya')
        arr[ j + 1 ] = currentVal//this is for the verify the property of a value
       
    }
    return arr
}
const mia = insertionSort( [ 2,1,9,76,4] )
console.log(mia)
