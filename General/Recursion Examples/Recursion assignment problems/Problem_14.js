// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

// My solution
function collectStrings(obj) {
    const ob = obj;
    const res = [];

    function helper(objt) {
        for (let key in objt) {
            if (typeof objt[key] === "string") {
                res.push(objt[key]);
            } else if (typeof objt[key] === "object") {
                helper(objt[key]);
            } else {
                return;
            }
        }
    }
    helper(ob);
    return res;
}

// Colt's solutions

// 1) Helper Method Recursion Version
function collectStrings(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
        for (var key in o) {
            if (typeof o[key] === "string") {
                stringsArr.push(o[key]);
            } else if (typeof o[key] === "object") {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
}

// 2) Pure Recursion Version
function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            stringsArr.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}
