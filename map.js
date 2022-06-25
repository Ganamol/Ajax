const fruit=new Map([
    ["grapes",50],["apple",70]

])
let grape=fruit.get("apple");

let item=fruit.set("orange",89);

fruit.set("apple",50)

fruit.delete("grapes")
console.log(fruit);