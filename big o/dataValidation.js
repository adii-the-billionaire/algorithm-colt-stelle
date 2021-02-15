//be a habitual of keys values nd object so this is very important
function charCount( data ) {
    var result = {}
    for ( var i = 0; i < data.length; i++ ){
        var char = data[ i ]
        if ( result[ char ] > 0 ) {
            result[char]++
        } else {
            result[char] = 1
        }
    }
    return result
}
const mia = charCount( 'hello' )
console.log(mia)