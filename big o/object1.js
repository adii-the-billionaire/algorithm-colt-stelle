function charChount( data ) {
    var obj = {}
    for ( var i = 0; i < data.length; i++ ){
        var char = data[ i ] 
        if ( /[a-z0-9]/.test( char ) ) {
            obj[char] = i
        }
    }
    return obj
}
const mia = charChount( 'adii shukla' )
console.log(mia)