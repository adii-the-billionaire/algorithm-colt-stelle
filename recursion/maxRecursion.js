//solving max with recursion so let's start here
function max( arr ) {
    let result = Number
    function helper( input ) {
        if(input.length<1){return}
        if ( input[ 0 ] < input[ 1 ] ) {
            result = input[1]
        }
        helper(input.slice(1))
    }
    helper( arr )
    return result
}
const sia = max( [ 1, 2, 3, 4, 5, 6, 7 ] )
console.log(sia)