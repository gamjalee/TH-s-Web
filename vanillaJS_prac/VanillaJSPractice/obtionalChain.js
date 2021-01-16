const person={
    getName: ()=>'abc'
};
const name=person.getName?.();
console.log(name);

const person2={friends: null, mother: null};
const friend=person2.friends?.[0];
console.log(friend);