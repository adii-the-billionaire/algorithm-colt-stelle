//here is how we can optimize as BigO(n) not a n^2
function sum( arr ) {
    let left = 0
    let right = arr.length - 1
    while ( left < right ) {
        let sum = arr[ left ] + arr[ right ]
        if ( sum === 0 ) {
            return [arr[left],arr[right]]
        } else if ( sum > 0 ) {
            right--
        } else { 
            left++
        }
    } 
}
const mia = sum( [ 1, 9, -1, -2 ] )
console.log(mia)