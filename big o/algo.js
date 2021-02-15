function same( a, b ) {
    if ( a.length !== b.length ) {
          return console.log( false )
    } 
    let sip,tip
    for ( let i = 0; i < a.length; i++ ){
        console.log( `${ a[ i ] } ${ b[ i ] }` )
        sip = a[ i ] * a[ i ]
        tip = b[i]
    }

    if ( sip === tip ) {
        return console.log(true)
    } else {
        return console.log(`numer must be equal`)
    }
    
}
same([1,2,3],[1,4,0])