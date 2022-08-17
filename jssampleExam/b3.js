var arr = [{ username: 'fred' ,age:29}, 
  { username: 'bill',age:24}, 
  { username: 'john',age:45},
  { username: 'ted' ,age:18}
];

function userExists(username) {
    for(var i =0;i<=arr.length;i++)
    if(username==arr[i]){
        return true
    }
    else{
        return false
    }
}
console.log(userExists('ahmed')); 
