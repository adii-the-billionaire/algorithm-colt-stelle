function swap( array ) {
    for ( var i = 0; i < array.length; i++ ){
        for ( var j = 0; j < array.length; j++ ){
            if ( array[ j ] > array[ j + 1 ] ) {
                var temp = array[ j ]
                array[ j ] = array[ j + 1 ]
                array[j+1] = temp
            }
        }
    }
    return array
}
const mia = swap( [ 1, 24, 4, 57 ] )
console.log(mia)