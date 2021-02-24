///here is the recursion for finding odd values of an arrays
function collectOddValue( arr ) {
    let result = []
    function helper( helperInput ) {
        if ( helperInput.length === 0 ) {
            return 
        }
        if ( helperInput[ 0 ] % 2 !== 0 ) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))//pointer dependent flow of recursion understand this ohkay 
    }
    helper( arr )
    return result
}
const mia = collectOddValue( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] )
console.log(mia)