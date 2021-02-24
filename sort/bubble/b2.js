function sort( array ) {
    for ( var i = 0; i < array.length; i++ ){
        for ( var j = 0; j < array.length; j++ ){
            console.log(array[i],array[j],array[j+1])
            if ( array[ j ] > array[ j + 1 ] ) {
                var temp = array[ j ]
                array[ j ] = array[ j + 1 ]
                array[j+1] = temp
            }
        }
    }
    return array
}
const mia = sort( [ 2, 3, 6, 5 ] )
console.log(mia)