const arr = [3, 5, 8, 100, 20];
var max=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i])
    {
        max=arr[i]
    }
}
console.log(max)