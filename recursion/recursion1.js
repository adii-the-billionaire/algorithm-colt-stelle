///print all the even value of input array
function eventInput( arr ) {
    let result = []
    function helper( input ) {
         if ( input.length === 0 ) {
            return //this is the execution for stopping the stack so got it
        }
        if ( input[ 0 ] % 2 === 0 ) {
            result.push( input[ 0 ] )
        }  
        helper(input.slice(1))
    }
    helper( arr )
    return result
}
const mia = eventInput( [ 2, 2, 3, 4, 5, 8, 8, 10 ] )
console.log(mia)