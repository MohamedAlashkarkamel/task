var x = [1,2,3,4]

function reverse(x){
    var y =new Array
    for(var i =0 ; i <x.length ; i++){
        y.unshift(x[i])
    }
    return y ;
}
console.log(x)
console.log(reverse(x))