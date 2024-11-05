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
console.log(v.v().v);
