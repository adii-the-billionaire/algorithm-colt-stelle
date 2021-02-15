function same( a, b ){
    if ( a.length !== b.length ) {
        return false
    }
    for ( let i = 0; i < a.length; i++ ){
        let correctIndex = b.indexOf( a[ i ] ** 2 )
        if ( correctIndex === -1 ) {
            return false
        }
        b.splice(correctIndex,1,true)
    }
    return b
}
same( [ 1, 2, 3 ], [ 1, 4, 0 ] )

