const arr = [20, 50, 8, 100, 20];
var min=arr[0];
for(let i=1;i<arr.length;i++){
    if(min>arr[i])
    {
        min=arr[i]
    }
}
console.log(min)