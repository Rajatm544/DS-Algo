// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// My solution, doesn't work
function stringifyNumbers(obj) {
    let newObj = new Object(...obj);
    function helper(ob) {
        for (let key in ob) {
            if (typeof ob[key] === "number") {
                let val = ob[key];
                delete ob[key];
                ob[key] = String(val);
            } else if (typeof ob[key] === "object") {
                return helper(ob[key]);
            }
        }
    }

    helper(newObj);
    return newObj;
}

// Colt's solution
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
