/*jshint multistr:true */

var text = "some text Donald some text Donald some text Donald";
var myName = "Donald";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "D") {
        for (var j = i; j < myName.length + i; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits === 0) {
    console.log("Your name wasn't found!")
}
else {
    console.log(hits)
}

//alternate method
var res = text.match(/Donald/g);
console.log(res);