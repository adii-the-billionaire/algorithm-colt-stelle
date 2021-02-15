function mia(data) {
    if (/[a-zA-Z0-9]/.test(data)) {
        const sia = {}
     for ( let i = 0; i < data. length; i++ ){
        let char = data[ i ]
        sia[char] = i
    }
    return sia
    } else {
        return false
   }
}
const text = mia( "mia andrey" )
console.log(text)

//our out put should be their below
//m:0,i:1,a:
//how to ignore the countin of empty string so let's start thinking of this problems