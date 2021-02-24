//here is sorted two arrays going to merge as in the sorted manner
function merge( arr1, arr2 ) {
    let results = []
    let i = 0
    let j = 0
    while ( i < arr1.length && j < arr2.length ) {
        if ( arr2[ j ] > arr1[ i ] ) {
            results.push( arr1[ i ] ) 
            i++
        } else {
            results.push( arr2[ j ] )
            j++
        }
    }
    return results
}
const mia = merge( [ 1, 10, 50 ], [ 2, 14, 99, 100 ] )
console.log(mia)