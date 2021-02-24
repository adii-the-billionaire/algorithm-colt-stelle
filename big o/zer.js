//a function whose sum is zero
function sum( arr ) {
    for ( let i = 0; i < arr.length; j++ ){
        for ( let j = i + 1; j < arr.length; j++ ){
            if ( arr[ i ] + arr[ j ] === 0 ) {
                return [arr[i],arr[j]]
            } 
        }
    }
}
const mia = sum( [ -1, -2, 1] )
console.log(mia)
//by symmetrical approach