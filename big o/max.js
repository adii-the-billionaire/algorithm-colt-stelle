function sum( array, num ) {
    let obj = []
    let max = 0
    for ( let i = 0; i < array.length; i++ ){
        obj[i] = array[i]+num
    }
    for ( let i = 0; i < obj.length; i++ ){
        if ( obj[ i ] < obj[ i + 1 ] ) {
             max = obj[i+1]
        }
    }
   return max
}
const mia = sum( [ 9, 2, 3, 4 ], 7 )
console.log(mia)