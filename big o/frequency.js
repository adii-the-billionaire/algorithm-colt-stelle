//another problem that is using frequency pattern to avoid nested loop so h
function compareTriplets(a, b) {
    let bb = 0
    let aa = 0
    for ( var i = 0; i < a.length; i++ ) {
        if ( a[ i ] > b[ i ] ) {
            aa = aa + 1
        } else 
            if ( a[ i ] < b[ i ] ) {
            bb = bb+1
            } 
    }
return [aa,bb]
}
const mia = compareTriplets( [ 1, 4, 6 ], [ 2, 8, 6 ] )
console.log(mia)