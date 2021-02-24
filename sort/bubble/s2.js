//classical approach
function sort( array ) {
    for ( var i = array.length; i > 0; i-- ){
        for ( var j = 0; j < i - 1; j++ ){
            console.log(array[j+1])
            if ( array[ j ] > array[ j + 1 ] ) {
                var temp = array[ j ]
                array[ j ] = array[ j + 1 ]
                array[j+1] = temp
            }
        }
    }
    return array
}
const mia = sort( [ 37, 45, 29, 8 ] )
console.log(mia)