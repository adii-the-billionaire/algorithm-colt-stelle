//here is the problems of a frequency pattern so let's start the problems
function same( arr1, arr2 ) {
    if ( arr1.length !== arr2.length ) {
        return false
    }
    for ( let i = 0; i < arr1.length; i++ ){
        let correctIndex = arr2.indexOf( arr[ i ] ** 2 )
        if ( correctIndex === -1 ) {
            return false
        }
        console.log( arr2 )
        arr2.splice(correctIndex,1)
    }
    return true
}
same( [ 1, 2, 3 ], [ 4, 1, 9 ] )
//here is the example of nested loop also this the example bigon**2
//how to optimize this problems without using indexOf