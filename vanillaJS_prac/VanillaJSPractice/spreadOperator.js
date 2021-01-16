const name='mike';
const obj={
    age: 21,
    name,   // ES6
    getName(){
        // this: obj
        return this.name;
    }
}
console.log(obj.getName());

// computed property name
function makeObject1(key, value){
    const obj={};
    obj[key]=value;
    return obj;
}
function makeObject2(key, value){
    return {[key]:value};
}

// spread operator
Math.max(1,2,3,4,5);
const numbers=[1,2,3,4,5];
console.log(Math.max(...numbers));