const cowsay = require("cowsay");

const myInfos = require("./information.js");
console.log(myInfos);

console.log(cowsay.say({
    text : `I'm ${myInfos.firstName} and I'm at the campus of ${myInfos.campus}`,
    e : "00",
    T : "U"
}));