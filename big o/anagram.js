function checkAnagram( a, b ) {
    if ( a.length !== b.length ) {
        return false
    }
    let obj1 = {}
    let obj2 = {}
    for ( var char of a ) {
        obj1[char] = (obj1[char]||0) + 1
    }
    for ( var char of b ) {
        obj2[char] = (obj2[char]||0) + 1
    }
    console.log( obj1 )
    console.log(obj2)
    for ( var key in obj2 ) {
        if ( !( key in obj1 ) ) {
            return false
        }
    }
    return true
}
const mia = checkAnagram( 'ram', 'air' )
console.log(mia)
//we can also use simple method that is includes but we have to more precise toward our applicatin and optimizatin
