//counting the unique value
function counUniqueValues( arr ) {
    var i = 0
    for ( var j = 1; j < arr.length; j++ ){
        if ( arr[ i ] !== arr[ j ] ) {
            i++
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
}
