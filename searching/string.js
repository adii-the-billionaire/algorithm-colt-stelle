//nested loop
function naiveSeach( long, short ) {
    for ( var i = 0; i < long.length; i++ ){
        for ( var j = 0; j < short.length; j++ ){
            console.log(i,short[j])
        }
    }
}
const mia = naiveSeach( 'hi body hell', 'he' )
console.log(mia)