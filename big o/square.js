//given square matrix to calculate the sum of it's diagonal
function square( arr ) {
    let index = arr.length
    //check wheather it's square matrix or not  
    for ( var i = 0; i < arr.length; i++ ){
       
       // arr[i].length !== index?arr.splice(i,1):console.log('hi')
       //now using nested loop so here is problems
        //first of all check whether matrix is square or not let's start doing
        if ( arr[ i ].length !== index ) {
            arr.splice(i,1)
        }
       
    }
    
    let ari = arr
    let tip = 0
    let sum1 = 0
    let sum2 = 0
    let sip = ari.length -1
    for ( var i = 0; i < ari.length; i++ ){
        sum1 = sum1 + ari[ tip ][ tip ]
        
        sum2 = sum2 + ari[tip][ sip ]
        tip++
        sip--
    }
    console.log( sum1 )
    console.log(sum2)
    return Math.abs(sum1-sum2) 
}

const mia = square( [ [ 90, 9, 3,8 ], [ 4, 5, 3 ,9], [ 99 ,0,9,0] ,[9,9,9,9]] )
console.log(mia)