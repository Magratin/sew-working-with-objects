//UserStory1
const x = {
    y: {
        z: 42
    }
}
//console.log(x.y.z);

//UserStory2
const v = {
    v: function () {
        return {v: 42}
    }
}
//console.log(v.v().v);

//UserStory3
function numberMembers(obj) {
    return Object.keys(obj).length;
}

const person = {
    name: 'John',
    email: 'john@example.com',
    password: 'password@example.com'
}


//console.log(numberMembers(person));

//UserStory4
function equals(obj1, obj2) {
    return obj1.name === obj2.name;
}

const person2 = {
    email: 'john@example.com',
    name: 'John',
    password: 'password@example.com'
}

console.log(equals(person, person2));