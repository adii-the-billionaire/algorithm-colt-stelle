const array = [ 1, 2, 5, 4, 1, 2 ]
const mia = array.sort( ( a, b ) => {
    if ( a - b > 0 ) {
        return -1
    } else if ( a - b < 0 ) {
        return 1
    } else {
        return true
    }
} )
console.log(mia)