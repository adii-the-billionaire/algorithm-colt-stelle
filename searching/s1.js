function naiveSeach( long, short ) {
    let count = 0
    for ( var i = 0; i < long.length; i++ ){
        for ( var j = 0; j < short.length; j++ ){
            console.log(short[j],long[i+j])
            if ( short[ j ] !== long[ i + j ] ) {
                console.log( 'break' )
                break
            }
            if ( j === short.length - 1 ) {
                console.log( 'found one' )
                count++
            }
        }
    }
}
const mia = naiveSeach('the quick brown fox jumps over the lazy dog','ox')