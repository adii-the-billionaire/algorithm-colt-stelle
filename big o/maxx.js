function max( arr ) {
   let mx = 0
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[ i+1 ] < arr[ i ] ) {
            arr[ i + 1 ] = arr[ i ]
            mx = arr[i]          
        } 
       
        
           
    }
   return mx
}
const mia = max( [ 14, 4, 13, 90 ] )
console.log(mia)