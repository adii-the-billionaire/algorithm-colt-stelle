function same( arr1, arr2 ) {
    if ( arr1.length !== arr2.length ) {
        return false
    }
    let frequencyCounter1 = {}
    let frequnecyCounter2 = {}
    for ( let val of arr1 ) {
        frequencyCounter1[val] = (frequencyCounter1[val]||0) + 1
    }
    for ( let val of arr2 ) {
        frequnecyCounter2[val] = (frequnecyCounter2[val]||0)+1
    }
    for ( let key in frequencyCounter1 ) {
        if ( !( key ** 2 in frequnecyCounter2 ) ) {
            return false
        }
        if ( frequnecyCounter2[ key ** 2 ] !== frequencyCounter1[ key ] ) {
            return false
        }
    }
    return true
}

same( [ 2, 3, 4 ], [ 4, 9, 16 ] )

//the time complexity is O(n)