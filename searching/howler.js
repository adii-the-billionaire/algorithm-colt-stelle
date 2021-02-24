//make linear serch algorithm so here is
function main( arr, num ) {
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[ i ] === num ){
            return i
        } 
    }
    return -1
}
const mia = main( [ 1, 2, 3, 4, 5 ], 9 )
console.log( mia )
//linear search in array 
//find()
//findIndex()
//indexOf()
//includes()
//all of the above have big(N)