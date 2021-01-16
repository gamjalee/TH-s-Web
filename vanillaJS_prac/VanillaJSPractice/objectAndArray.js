// construct object
const obj={
    age: 21,
    name: 'mike',   // not ;
};
obj.city='Seoul';
obj.age=30;
delete obj.city;
// construct different object
const obj2=new Object({ // new operator->function
    age: 21,
    name: "mike",
});
// Use Constructor function
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
// destructing
for(const [key, value] of Object.entries(obj)){
    console.log(key, value);
}

// Array
const arr=[1,2,3];
console.log(arr.map(item=>item+1));
console.log(arr.filter(item=>item>=2));
// sum of array O(N)
console.log(arr.reduce((acc, item)=>acc+item, 0));

arr.forEach(item=>console.log(item));
for(const item of arr){
    console.log(item);
}

console.log(arr.some(item=>item===2));
console.log(arr.every(item=>item===2));
console.log(arr.includes(2));
// O(N)? or merge sort O(lgN)? => O(N)
console.log(arr.find(item=>item%2===1));
console.log(arr.findIndex(item=>item%2===1));