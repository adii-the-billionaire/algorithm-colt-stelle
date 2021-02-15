 //simple using of forEach that provides the time complexity of Big o(N)
 //here is the using for of loop understanding
function char( data ) {
    var obj = {}
    for ( var char of data ) {
        if ( isAlphaNumeric( char ) ) {
            char  = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlphaNumeric( char ) {
    var code = char.charCodeAt( 0 )
    if ( !( code > 47 && code < 58 ) && !( code > 64 && code < 91 ) && !( code > 96 && code < 123 ) ) {
        return false
    } else {
        return true
    }
}

const mia = char( 'adii  i' )
 console.log(mia)