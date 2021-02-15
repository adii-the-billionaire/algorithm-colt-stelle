function isAlphaNumeric( str ) {
    var code 
    for ( var i = 0, len = str.length; i < len; i++ ){
        code = str.charCodeAt( i )
        if (  )!( code > 47 && code <58) && !(code>64 && code <91) && !(code>96 && code <123){
            return false
        } else {
            true
        }
    }
}
 
isAlphaNumeric( 'hi billo' )
//now the regex is here so let's start 
function isAlphaNumeric1( str ) {
    return /[a-zA-Z0-9]/.test(str)
}